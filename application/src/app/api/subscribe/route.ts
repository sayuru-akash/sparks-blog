import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.nextUrl);
  const email = url.searchParams.get("email");
  if (email && validator.isEmail(email)) {
    const csvFilePath = path.join(process.cwd(), "subscribed_emails.csv");
    try {
      let csvData = "";
      if (fs.existsSync(csvFilePath)) {
        csvData = await fs.promises.readFile(csvFilePath, "utf-8");
      } else {
        csvData = "email\n";
      }
      if (!csvData.includes("email")) {
        csvData = "email\n" + csvData;
      }
      if (csvData.includes(email)) {
        return NextResponse.json({
          message: "You are already subscribed to sparks",
        });
      } else {
        const csvLine = `${email}\n`;
        await fs.promises.appendFile(csvFilePath, csvLine);
        return NextResponse.json({
          message: "Thank you for subscribing sparks, stay tuned!",
        });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: "An error occurred while subscribing, please try again later",
      });
    }
  } else {
    return NextResponse.json({ message: "Invalid email provided" });
  }
}

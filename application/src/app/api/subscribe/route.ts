import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { type HttpResponse } from "@/types";

// Ensure CSV file exists
async function ensureCsvFileExists(filePath: string): Promise<void> {
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "email\n", "utf-8");
  }
}

// Read and check if email exists
async function isEmailSubscribed(
  filePath: string,
  email: string
): Promise<boolean> {
  try {
    const csvData = await fs.readFile(filePath, "utf-8");
    return csvData.toLowerCase().includes(email.toLowerCase());
  } catch {
    return false;
  }
}

// Append email to CSV
async function addEmailToCsv(filePath: string, email: string): Promise<void> {
  const csvLine = `${email}\n`;
  await fs.appendFile(filePath, csvLine, "utf-8");
}

export async function GET(
  req: NextRequest
): Promise<NextResponse<HttpResponse>> {
  try {
    const email = req.nextUrl.searchParams.get("email");

    // Validate email
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email provided" },
        { status: 400 }
      );
    }

    const csvFilePath = path.join(process.cwd(), "public", "subscribed_emails.csv");
    await ensureCsvFileExists(csvFilePath);

    // Check if already subscribed
    const isSubscribed = await isEmailSubscribed(csvFilePath, email);
    if (isSubscribed) {
      return NextResponse.json({
        message: "You are already subscribed to sparks",
      });
    }

    // Add email to CSV
    await addEmailToCsv(csvFilePath, email);

    return NextResponse.json({
      message: "Thank you for subscribing to sparks, stay tuned!",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      {
        message: "An error occurred while subscribing, please try again later",
      },
      { status: 500 }
    );
  }
}

// Allow POST method as well for better client compatibility
export async function POST(
  req: NextRequest
): Promise<NextResponse<HttpResponse>> {
  try {
    const body = await req.json();
    const email = body.email as string;

    // Validate email
    if (!email || !validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email provided" },
        { status: 400 }
      );
    }

    const csvFilePath = path.join(process.cwd(), "public", "subscribed_emails.csv");
    await ensureCsvFileExists(csvFilePath);

    // Check if already subscribed
    const isSubscribed = await isEmailSubscribed(csvFilePath, email);
    if (isSubscribed) {
      return NextResponse.json({
        message: "You are already subscribed to sparks",
      });
    }

    // Add email to CSV
    await addEmailToCsv(csvFilePath, email);

    return NextResponse.json({
      message: "Thank you for subscribing to sparks, stay tuned!",
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      {
        message: "An error occurred while subscribing, please try again later",
      },
      { status: 500 }
    );
  }
}

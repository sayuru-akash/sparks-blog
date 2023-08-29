"use client";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NewsletterForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
          };
          const email = target.email.value;
          try {
            fetch(`/api/subscribe?email=${email}`);
            setSuccessMessage("Thank you for subscribing sparks, stay tuned!");
            setErrorMessage("");
            target.email.value = "";
          } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Sorry, something went wrong, please try again!");
          }
        }}
      >
        <span className="text-xl font-medium text-gray-900 text-center">
          Subscribe to our <br />
          <span className="font-bold text-purple-500">NEWSLETTER</span>
        </span>
        <p className="text-md font-sm text-gray-900 text-center">
          Join the{" "}
          <span className="text-purple-500 font-semibold">
            #CodezelaCommunity
          </span>{" "}
          and stay ahead of the curve with our newsletter on what we do, global
          tech news, and trends.
        </p>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            className="text-center text-purple-600 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Subscribe for Free
          <FontAwesomeIcon
            icon={faHandPointRight}
            height={12}
            width={12}
            className="ml-2 mt-1"
          />
        </button>
        {successMessage && (
          <span className="text-green-600 text-sm">{successMessage}</span>
        )}
        {errorMessage && (
          <span className="text-red-600 text-sm">{errorMessage}</span>
        )}
      </form>
    </>
  );
}

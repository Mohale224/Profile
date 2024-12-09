"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a3c7d22-7a61-419c-9f1b-f8714eb33681");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setTimeout(() => setResult(""), 5000); // Clear success message after 5 seconds
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="my-5 py-8 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h5 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-6">
            I&apos;m currently looking for new opportunities, and my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="https://github.com" target="_blank" aria-label="Github">
              <Image
                src="/icons8-github (1).svg"
                alt="Github Icon"
                width={40}
                height={40}
                className="hover:opacity-80 bg-white rounded-md"
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Image
                src="/icons8-linkedin.svg"
                alt="LinkedIn Icon"
                width={40}
                height={40}
                className="hover:opacity-80 bg-white rounded-md"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="w-full max-w-lg bg-black p-8 rounded-lg shadow-md mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Contact Us
            </h2>
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={result === "Sending..."}
                className={`w-full py-3 text-white font-medium rounded-lg ${
                  result === "Sending..."
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                }`}
              >
                {result === "Sending..." ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Feedback Message */}
            {result && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  result === "Form Submitted Successfully"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-5 py-2 gap-8 px-4 sm:px-8 lg:px-16 relative items-center">
      {/* Left Section */}
      <div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-6 max-w-md">
            I&apos;m currently looking for new opportunities, and my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="social flex gap-4">
            <Link href="https://github.com" target="_blank" aria-label="Github" >
              <Image
                src="/icons8-github (1).svg"
                alt="Github Icon"
                width={40}
                height={40}
                className="hover:opacity-80 bg-white rounded-md "
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
      </div>

      {/* Right Section */}
      <div>
        <form className="flex flex-col bg-[#18191E] p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#282C34] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#282C34] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's discuss..."
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#282C34] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 h-28 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-200"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-4">
              Email sent successfully! Thank you for reaching out.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

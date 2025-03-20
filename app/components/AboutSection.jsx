"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Next.js</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Blockchain</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>Impact School</li>
        <li>Holberton School Lesotho</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>Impact School</li>
        <li>Holberton School Lesotho</li>
        <li>SoloLearn</li>
        <li>IoT</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8 px-4 xl:py-16 xl:px-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/image/projects/workspace.jpg"
            width={500}
            height={500}
            alt="Profile"
            priority
            className="rounded-lg object-cover w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </div>

        {/* Content Section */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            I am a Frontend web developer with a passion for creating interactive
            and responsive web applications. I have experience with Next.js, Tailwind CSS,
            and Typescipt. I am also familiar with Git, React.js,
            and Python. I am a quick learner and always looking to expand my
            knowledge and skill set. I am a team player and excited to work with
            you to create amazing applications.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4 justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

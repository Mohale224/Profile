"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = () => [
  {
    metric: "Projects",
    prefix: "+",
    value: "100",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
  },
  {
    metric: "Awards",
    value: "3",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F]  py-8 px-4 sm:px-8 lg:px-16 flex flex-wrap items-center justify-around gap-8">
        {achievementsList().map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center w-full sm:w-1/2 lg:w-1/4"
          >
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold"
                configs={(_, idx) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (idx + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mt-2">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;

import React from 'react'

const achievementsList = () => [
    {
        metric: "Projects",
        value: "100+",
    },
    {
        metric: "Users",
        value: "1M+",
    },
    {
        metric: "Awards",
        value: "10+",
    },
    {
        metric: "Years",
        value: "2+",
    },
];
const AchievementsSection = () => {
  return (
    <div
      className='flex flex-row items-center justify-center mx-4'>
        <div className='border-[#33353F] border-rounded-md py-8 px-17 flex flex-row items-center justify-between'>
            
        </div>
        {
        achievementsList().map((achievement, index) => {
          return (
              <div key={index} 
              className='flex flex-col items-center justify-center mx-4'>
                <h2 className='text-white text-4xl font-bold'>
                    {achievement.value}
                    </h2>
                <p className='text-[#ADB7BE] text-base'>
                    {achievement.metric}</p>
              </div>
          )})
      }
    </div>
  )
}

export default AchievementsSection

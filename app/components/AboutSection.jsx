 "use client"
 import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {title: "Skills",
  id:"skills",
  content:(
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Nextjs</li>
    </ul>
  )
},
{
  title:"Education",
  id:"education",
  content:(
    <ul>
      <li>Impact School</li>
      <li>Holberton School Lesotho  </li>
      </ul>
  )
},
{
  title:"Certifications",
  id: "certifications",
  content: (
    <ul>
      <li>Impact School</li>
      <li>Holberton School Lesotho</li>
    </ul>
  )
}
]

const AboutSection = () => {
  const[tab, setTab] = useState('skills');
  const [ isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/workspace.jpg" width={500} height={500} alt="profile"/>
        <div>
          <h2 className='text-4xl font-bold mb-4 text-white'>About me</h2>
          <p className='text-base lg:text-lg'>
            I am a Backend web developer with a passion for creating interactive 
            and responsive web applications.
             I have experience with HTML, CSS, JavaScript and Blockchain. I am
              also familiar with Git, React.js and Next.js. I am a quick learner
               and I am always looking to expand my knowledge and skill set. I am a 
               team player and I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
             selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}>
                {" "}
                Skills{" "} 
                </TabButton>
            
            <TabButton
             selectTab={() => handleTabChange('education')}
             active={tab === 'education'}>
              {" "}
            Education{" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}>
            {" "}
              Experience{" "} 
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        </div>
        

    </section>
  );
};
export default AboutSection;
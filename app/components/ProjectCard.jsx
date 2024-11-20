import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 justify-center items-center">
      {/* Image Section */}
      <div
        className="h-52 w-full md:h-72 lg:w-60 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 rounded-full border-[#323638] flex items-center justify-center cursor-pointer hover:bg-[#323638] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#b4c4cc] group-hover/link:text-white" />
            </Link>
          ) : (
            <div className="h-14 w-14 mr-2 border-2 rounded-full border-[#323638] flex items-center justify-center opacity-50">
              <CodeBracketIcon className="h-10 w-10 text-[#b4c4cc] opacity-50" />
            </div>
          )}
          {previewUrl ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 rounded-full border-[#323638] flex items-center justify-center cursor-pointer hover:bg-[#323638] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#b4c4cc] group-hover/link:text-white" />
            </Link>
          ) : (
            <div className="h-14 w-14 border-2 rounded-full border-[#323638] flex items-center justify-center opacity-50">
              <EyeIcon className="h-10 w-10 text-[#b4c4cc] opacity-50" />
            </div>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white w-full lg:w-auto bg-[#181818] rounded-b-xl py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h5>
        <p className="text-[#ADB7BE] text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

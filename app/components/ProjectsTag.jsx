import React from 'react'

const ProjectsTag = ({ name, onClick, isSelected }) => {
const buttonStyle = isSelected
 ? "text-white border-b border-blue-500"
 : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <div>
      <button className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
      >
        {name}
        </button>
    </div>
  )
}

export default ProjectsTag;

import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? "text-white border-b border-blue-500" : "text-[#ADB7BE]" ;
  return (
    <div>
      <button onClick={selectTab}>
        <p className={'mr-3 font-semibold hover:text-white ${buttonClasses}'}>
            {children}
        </p>
       
      </button>
    </div>
  )
}

export default TabButton;

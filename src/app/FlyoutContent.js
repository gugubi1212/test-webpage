import { color } from "framer-motion";
import { useState } from "react";

const Tabs = ({colorful, color, setColor}) => {
  let tabs = colorful;
  let [activeTab,setActiveTab]=useState('bg-'+color);
  return (
    <div className=' flex space-x-1'>
      {tabs.map((tab)=>(
        <li 
        key={tab.id} 
        onClick={()=>{setActiveTab(tab.id); setColor(tab.text)}}
        className={`${tab.id===activeTab?"":"hover:opacity-50"} cursor-pointer relative rounded-full px-3 py-1.5 text-sm font-medium bg-white text-black outline-2 outline-yellow-400 focus-visible:outline`}>
          {activeTab === tab.id && (
            <div className={`absolute inset-0 rounded-full ${tab.id}`}  ></div>
          )}
          <span className='relative'>{tab.label}</span>
        </li>
      ))}
    </div>
  );
}

const SlideTabs= ({colorful, color, setColor}) => {
  return(
    <ul className=' mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
        <Tabs colorful={colorful} color={color} setColor={setColor}></Tabs>
    </ul>
  );
}


export default function FlyoutContent({display, colorful, color, setColor}){
  return(
    <div className="relative w-fit h-fit bg-white p-6 shadow-xl'">
      <SlideTabs colorful={colorful} color={color} setColor={setColor}></SlideTabs>
      
    </div>
  );
}
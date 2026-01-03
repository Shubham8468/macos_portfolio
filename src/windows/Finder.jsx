import React from 'react'
import {WindowControl} from "#components";
import {Server} from "lucide-react";
import windoWrapper from "#hoc/WindoWrapper.jsx";
import {locations} from "#constants";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import useWindowStore from "#store/window.jsx";



const Finder = () => {
    const {openZIndex}=useWindowStore();
    const {activeLocation, setActiveLocation} = useLocationStore();
    const openItem=(item)=>{
        if(item.fileType==='pdf'){
            return openZIndex('resume')
        }
        if(item.kind==='folder'){
            return setActiveLocation(item)
        }
        if(['fig','url'].includes(item.fileType)&& item.href){
            return window.open(item.href,'_blank');
        }
        openZIndex(`${item.fileType}${item.kind}`,item);
    }

const renderList=(items)=>items.map((item)=>(
        <li key={item.id} onClick={()=>setActiveLocation(item)} className={clsx(item.id=== activeLocation.id?"active":"not-active")}>
            <img src={item.icon} className='w-4' alt={item.name}  />
            <p className='text-sm font-medium
                                truncate'>{item.name}</p>
        </li>
    ));


   return (
    <>
       <div id="window-header">
       <WindowControl target='finder'/>
       <Server className='icon'/>
       </div>
        <div className=" bg-white flex h-full">
            <div className='sidebar'>
                <div>
                    <h3>Favorites</h3>
                    <ul>
                        {renderList(Object.values(locations))}
                    </ul>
                </div>
                <div>
                    <h3>My projects</h3>
                    <ul>
                        {renderList(locations.work.children)}
                    </ul>
                </div>
            </div>
            <ul className='content'>
                {activeLocation ?.children.map((item)=>(
                    <li key={item.id} className={item.position} onClick={()=>openItem(item)}>
                        <img src={item.icon}  alt={item.name}  />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>


   </>
   )
}
const FinderWindow=windoWrapper(Finder,"finder");
export default FinderWindow

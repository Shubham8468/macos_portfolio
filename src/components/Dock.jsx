import React, {useRef} from 'react'
import {dockApps} from "#constants";
import { Tooltip } from 'react-tooltip'
import {useGSAP} from "@gsap/react";
import gsap  from "gsap";

const Dock = () => {
    const dockRef=useRef(null);

    useGSAP(()=>{
        const dock=dockRef.current;
        if(!dock)return;
        const icons=dock.querySelectorAll('.dock-icon');
        const animateIcon=(mouseX)=>{
            const {left}=dock.getBoundingClientRect();
            icons.forEach((icon)=>{
                const {left:iconLeft,width}=icon.getBoundingClientRect();
                const center=iconLeft - left + width/2;
                const distance=Math.abs(mouseX-center);
                const intensity=Math.exp(-(distance ** 2.5)/2500);
                gsap.to(icon,{
                    scale :1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration:0.2,
                    ease: "power2.out"
                })
            });
        }
        const handleMouseMove=(e)=>{
            const {left}=dock.getBoundingClientRect();
            animateIcon(e.clientX - left);
        };
        const resetIcons =()=>icons.forEach((icon)=>gsap.to(icon,{
            scale :1,
            y:0,
            duration:0.2,
            ease: "power1.out"
        }));

        dock.addEventListener("mousemove" ,handleMouseMove);
        dock.addEventListener("mouseleave",resetIcons);

        return ()=>{
            dock.removeEventListener("mousemove",handleMouseMove);
            dock.removeEventListener("mouseleave",resetIcons);
        };
    },[]);
   const toggleApp=(app)=>{
       //TODO Implement Open Window logic
   };

    return (
        <section id='dock'>
            <div ref={dockRef} className='dock-container'>
                { dockApps.map((item,index) => (
                    <div key={index} className='relative flex justify-center'>
                        <button type='button' className='dock-icon' aria-label={item.name}
                                data-tooltip-id='dock-tooltip'
                        data-tooltip-content={item.name}
                        data-tooltip-delay-show={150}
                        disabled={!item.canOpen}
                        onClick={() => toggleApp({id: item.id, canOpen: item.canOpen})}>
                            <img src={`/images/${item.icon}`} alt={item.name} loading='lazy'
                            className={item.canOpen ? "" : "opacity-60"}/>
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip"  place='top' className='tooltip'/>
            </div>
        </section>
    )
}
export default Dock

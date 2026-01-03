import React, {useLayoutEffect, useRef} from 'react'
import useWindowStore from "#store/window.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

const WindoWrapper = (Component, windowKey) => {
    const Wrapped=(props)=>{
        const {focusWindow, window}=useWindowStore();
        const ref=useRef(null);
        const win = window?.[windowKey];
        const isOpen = win?.isOpen || false;
        const zIndex = win?.zIndex || 1000;
        
        useGSAP(()=>{
            const el=ref.current
            if(!el || !isOpen)return;
            el.style.display="block";

        },[isOpen])
        useGSAP(()=>{
            const el=ref.current;
            if(!el)return;
            const header = el.querySelector('#window-header');
            if(header) {
                Draggable.create(el,{
                    trigger: header,
                    onPress:()=> focusWindow(windowKey)
                });
            }
        },[])

        useLayoutEffect(() => {
            const el=ref.current
            if(!el)return;
            if(!isOpen) {
                el.style.display = 'none';
                return;
            }
            el.style.display = 'block';
            gsap.fromTo(el,{scale:0.8, opacity:0, y:40},{scale:1,opacity:1 ,y:0,duration:0.8, ease:"power3.out"})
        }, [isOpen]);

        return (
            <section id={windowKey} ref={ref} style={{zIndex, display: isOpen ? 'block' : 'none'}} className="absolute">
                <Component {...props}/>
            </section>
        );
    };
    Wrapped.displayName=`WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}
export default WindoWrapper

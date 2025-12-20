import React from 'react';
import windoWrapper from "#hoc/WindoWrapper.jsx";
import {techStack} from "#constants";
import {Check} from "lucide-react";
import {Flag} from "lucide-react";
import {WindowControl} from "#components";

const Terminal = () => {

    return (
        <>
        <div id="window-header">
         <WindowControl target='terminal'/>
            <h2>Tech Stack</h2>
        </div>
            <div className="techstack">
            <p>
                <span className="font-bold">@Shubham % </span>
                show tech stack :-
            </p>
                <div className='label'>
                   <p className='w-32'>Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {
                        techStack.map(({category,items}) =>(
                            <li key={category}>
                                <Check className="check" size={20}></Check>
                                <h3>{category}</h3>
                                <ul>
                                    {items.map((item,i)=>(
                                    <li key={i}>{item}{i< items.length -1 ? ",": ""}</li>))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>
                <div className="footnote ">
                    <p>
                        <Check size={20} className='check'/> 6 of 6 stacks loaded successfully. (100%)
                    </p>
                    <p className='text-black'>
                        <Flag size={15} fill='black'/>
                         Render time: 2ms
                    </p>
                </div>
            </div>


        </>
    )
};
 const TerminalWindow = windoWrapper(Terminal, "terminal");
export default TerminalWindow;

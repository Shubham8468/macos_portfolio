import React from 'react'
import WindoWrapper from "#hoc/WindoWrapper.jsx";
import {socials} from "#constants";
import {WindowControl} from "#components";

const Contact = () => {
    return <>
        <div id="window-header">
            <WindowControl target="contact"/>
            <h2>Contact Me</h2>

        </div>
        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt='shubham' className='w-20 rounded-full' />
            <h3>Let's Connect</h3>
            <p>Add somthing text here !!!!</p>
            <ul>
                {socials.map(({id, bg, link,icon, text}) => (
                    <li key={id} style={{background: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>

                            <img src={icon} alt={text} className='size-5'/>
                            <p>{text}</p>


                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
}
const ContactWindow=WindoWrapper(Contact,"contact");
export default ContactWindow

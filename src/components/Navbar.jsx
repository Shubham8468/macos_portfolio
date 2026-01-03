import React from 'react'

// const data=[
//     {id:1,name:"Portfolio"},
//     {id:2,name:"Contact"},
//     {id:3,name:"Projects"},
// ]
import dayjs  from "dayjs";

import {navIcons, navLinks} from '../constants/index.js'
import useWindowStore from "#store/window.jsx";
const Navbar = () => {
     const {openZIndex}=useWindowStore()
    return (
        <nav>
            <div>
            <img src='/images/logo.svg' alt='Logo' />
            <p className="font-bold flex items-start ml-0">Shubham's Portfolio</p>
                <ul>
                    {
                        navLinks.map((item,id)=>(
                            <li key={id} onClick={()=>openZIndex(item.type)}>{item.name}</li>
                            )
                        )
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map((item,id)=>(
                        <li key={id}>
                            <img src={item.img}  className='icon-hover'/>
                        </li>
                    ))}
                </ul>
                <time>
                    {dayjs().format('ddd D MMM YYYY h:mm A ')}
                    {/*this is use for the display current time on the screen*/}
                </time>
            </div>
        </nav>
    )
}
export default Navbar

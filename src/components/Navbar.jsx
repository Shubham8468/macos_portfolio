import React from 'react'
// const data=[
//     {id:1,name:"Portfolio"},
//     {id:2,name:"Contact"},
//     {id:3,name:"Projects"},
// ]
import {navIcons, navLinks} from '../constants/index.js'
const Navbar = () => {
    return (
        <nav>
            <div>
            <img src='/images/logo.svg' alt='Logo' />
            <p className="font-bold flex items-start ml-0">Shubham's Portfolio</p>
                <ul>
                    {
                        navLinks.map((item,id)=>(
                            <li key={id}>{item.name}</li>
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
            </div>
        </nav>
    )
}
export default Navbar

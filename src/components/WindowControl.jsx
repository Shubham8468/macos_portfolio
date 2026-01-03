import React from 'react'
import useWindowStore from "#store/window.jsx";

const WindowControl = ({target}) => {

   const {closeZIndex}=useWindowStore()

    return (
        <div id='window-controls'>
            <div className='close' onClick={()=>closeZIndex(target)}></div>
            <div className='minimize'></div>
            <div className="maximize"></div>



        </div>
    )
}
export default WindowControl

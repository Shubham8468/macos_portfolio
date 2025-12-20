import React from 'react'
import useWindowStore from "#store/window.jsx";

const WindowControl = ({target}) => {

   const {closeWindow}=useWindowStore()

    return (
        <div id='window-controls' onClick={()=>closeWindow(target)}>
            <div className='close'>{closeWindow}</div>
            <div className='minimize'></div>
            <div className="maximize"></div>



        </div>
    )
}
export default WindowControl

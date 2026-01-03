import React from 'react';
import {Terminal, Safari, Resume, Finder,Contact} from "windows";
import {Navbar,Welcome,Dock} from '#components';
import gsap from 'gsap';
import {Draggable} from "gsap/Draggable";
// eslint-disable-next-line no-undef
gsap.registerPlugin(Draggable);

const App=()=>{
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            {/*// to de countinue in future...*/}
            <Finder/>
            <Contact />
        </main>
    )
}
export default App;

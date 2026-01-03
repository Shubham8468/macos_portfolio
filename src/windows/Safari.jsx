import React from 'react'
import {WindowControl} from "#components";
import windoWrapper from "#hoc/WindoWrapper.jsx";
import {PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search, Plus, Share, Copy} from "lucide-react";

const Safari = () => {
    return (
        <>
        <div id="window-header">
            <WindowControl target='safari'/>


            <PanelLeft className='ml-10 icon '/>
            <div className='flex items-center gap-1 ml-5'>
            <ChevronLeft className='icon'/>
                <ChevronRight className='icon'/>
           </div>
            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className='icon'/>
                <div className='search'>
                    <Search className='icon'/>
                    <input className='flex-1' type='text' placeholder='Search or enter website name' />
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <Share className='icon'/>
                <Plus className='icon'/>
                <Copy className='icon'/>
            </div>
        </div>
            <div className='blog'>
                <h2>My Devloper Blog</h2>

                <div className='space-y-8'></div>

            </div>
        </>
    )
}
 const SafariWindow=windoWrapper(Safari,"safari");
export default SafariWindow;

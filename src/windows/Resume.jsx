import React from 'react'
import windoWrapper from "#hoc/WindoWrapper.jsx";
import {WindowControl} from "#components";
import {Download} from "lucide-react";

import {Document,Page ,pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const Resume = () => {
    return (
        <>
        <div id="window-header">
            <WindowControl target='resume'/>
            <h2>Resume.pdf</h2>

            <a hrf='files/resume.pdf' download className="cursor-pointer" title="Downlaod resume">
                <Download className='icon'/>
            </a>
        </div>
        <div className="p-5">
            
        </div>
            <Document file="files/resume.pdf">
                <Page pageNumber={1}
                      renderTextLayer
                      renderAnnotationLayer />
            </Document>
        </>
    )
}
const ResumeWindow = windoWrapper(Resume, "resume");
export default ResumeWindow;

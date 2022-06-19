import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '../../../static/css/react-pdf-viewer-core.css';
import '../../../static/css/react-pdf-viewer-default.css';



export default function PdfViewer(props) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '550px', width: "75%", margin: "0 auto" }}>
                    <Viewer fileUrl={props.pdf} plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </>
    )
}

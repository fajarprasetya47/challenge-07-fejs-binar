import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfViewTiket() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.worker.min.js">
                <div
                    style={{
                        height: '162px',
                        width: '557px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Viewer fileUrl="/pdf/example.pdf" plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </>
    )
}
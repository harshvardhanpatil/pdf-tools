import './PdfViewer.css'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

// Create Document Component
const PdfViewer = ({ base64Result }) => {
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    function range(count) {
        return Array(count)
            .fill(0)
            .map((_, idx) => idx);
    }

    return (
        <div>
            <Document file={base64Result} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        customTextRenderer={false}
                        key={`page_${index + 1}`}
                        className="pdf-page mt-2"
                        pageNumber={index + 1}
                        height={300}
                    />
                ))}
            </Document>
        </div>
    )
}


export default PdfViewer
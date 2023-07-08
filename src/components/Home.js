import React, { useEffect, useState } from "react";
import UploadFiles from "./UploadFile";
import PdfViewer from "./PdfViewer";
import DragDropContainer from "./DragDropContainer";

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [base64Result, setBase64Result] = useState(null)

    useEffect(()=>{
        console.log(base64Result)
    },[base64Result])

    return (
        <div>
            <UploadFiles setSelectedFile={setSelectedFile} setBase64Result={setBase64Result} />
            {base64Result && <PdfViewer base64Result={base64Result} />}
            {/* <DragDropContainer/> */}
        </div>
    )
}

export default Home
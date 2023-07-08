import React from 'react'

const UploadFiles = ({ setSelectedFile, setBase64Result }) => {

    const changeHandler = (event) => {
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(event.target.files[0]);
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onloadend = (e) => {
                const base64Result = reader.result
                setBase64Result(base64Result)
            }
        }
    };

    return (
        <input type="file" name="file" onChange={changeHandler} />
    )

}

export default UploadFiles
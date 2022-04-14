import {useEffect, useState} from "react";

function CameraButton() {

    const [image, setImage] = useState(undefined);
    const [preview, setPreview] = useState(undefined);

    const handleClick = (e)=>{
        e.stopPropagation();
    }

    useEffect(() => {
        if (!image) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(image)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [image])

    const handleChange = (e)=>{
        setImage(e.target.files[0]);
        console.log(e);
        console.log(e.target.files[0]);
        console.log(image);
    }

    return (
        <span>
            <label htmlFor="image-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-image"/></label>
            <input accept="image/*" type="file" onChange={handleChange} onClick={handleClick} className="hide-stuff filename" id="image-input"/>
            {image && <img src={preview}/>}
        </span>
    )
}

export default CameraButton;
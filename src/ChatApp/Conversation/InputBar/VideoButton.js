function VideoButton() {

    const handleClick = (e)=>{
        e.stopPropagation();
        console.log("weeeeee");
    }

    return (
        <span>
            <label htmlFor="image-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-image"/></label>
            <input type="file" onClick={handleClick} className="hide-stuff filename" id="image-input"/>
        </span>
    )
}

export default VideoButton;
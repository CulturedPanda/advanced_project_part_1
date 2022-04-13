function CameraButton() {
    return (
        <span>
            <label htmlFor="video-input" className="padding form-label"> <i className="bi bi-input bi-camera-reels"/></label>
            <input type="file" className="hide-stuff filename" id="video-input"/>
        </span>
    )
}

export default CameraButton;
function VideoButton() {
    return (
        <span>
            <label htmlFor="image-input" className="padding form-label"> <i className="bi bi-input bi-image"/></label>
            <input type="file" className="hide-stuff filename" id="image-input"/>
        </span>
    )
}

export default VideoButton;
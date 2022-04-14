function VideoButton() {
    return (
        <span>
            <label htmlFor="video-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-camera-reels"/></label>
            <input accept="video/*" type="file" className="hide-stuff filename" id="video-input"/>
        </span>
    )
}

export default VideoButton;
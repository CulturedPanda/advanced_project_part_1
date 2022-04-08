function AttachMenu() {
    return (
        <span id="other-text">
            <label htmlFor="image-input" className="padding form-label"> <i className="bi bi-image"/></label>
            <input type="file" className="hide-stuff filename" id="image-input"/>

            <label htmlFor="video-input" className="padding form-label"> <i className="bi bi-camera-reels"/></label>
            <input type="file" className="hide-stuff filename" id="video-input"/>

            <label htmlFor="mic-input" className="padding form-label">  <i className="bi bi-mic"/></label>
            <input type="file" className="hide-stuff filename" id="mic-input"/>
        </span>
    )
}

export default AttachMenu;
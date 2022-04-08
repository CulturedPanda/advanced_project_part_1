function AttachMenu() {
    return (
        <span id ="other-text">
            <label htmlFor="image-input" className="form-label"> <i className="bi bi-image"/></label>
            <input type="file" className="filename" id="image-input"/>

            <label htmlFor="video-input" className="form-label"> <i className="bi bi-camera-reels"/></label>
            <input type="file" className="filename" id="video-input"/>

            <label htmlFor="mic-input" className="form-label">  <i className="bi bi-mic"/></label>
            <input type="file" className="filename" id="mic-input"/>

            {/*</input>*/}
            {/*<input type="file" className="filename">*/}
            {/*    <i className="bi bi-camera-reels"/>*/}
            {/*</input>*/}
            {/*<input type="file" className="filename">*/}
            {/*    <i className="bi bi-mic"/>*/}
            {/*</input>*/}
            {/*<input type="file" className="filename">*/}
            {/*    <i className="bi bi-geo-alt"/>*/}
            {/*</input>*/}
        </span>
    )
}

export default AttachMenu;
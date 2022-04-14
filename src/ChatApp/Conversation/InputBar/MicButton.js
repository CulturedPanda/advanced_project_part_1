function MicButton() {
    return (
        <span>
            <label htmlFor="mic-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-mic"/></label>
            <input type="file" className="hide-stuff filename" id="mic-input"/>
        </span>
    )
}

export default MicButton;
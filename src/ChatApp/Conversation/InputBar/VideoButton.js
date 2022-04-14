import RegisteredUser from "../../../Users/RegisteredUser";

function VideoButton({props}) {

    const handleChange = (e)=>{
        let url = URL.createObjectURL(e.target.files[0]);
        RegisteredUser.addMessageToConvo(props.username, props.convo, {
            sender: true, type: "video", time: new Date(), content: url
        });
        props.setConvo();
    }

    return (
        <span>
            <label htmlFor="video-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-camera-reels"/></label>
            <input onChange={handleChange}  accept="video/*" type="file" className="hide-stuff filename" id="video-input"/>
        </span>
    )
}

export default VideoButton;
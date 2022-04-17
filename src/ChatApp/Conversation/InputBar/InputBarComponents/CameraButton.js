import RegisteredUser from "../../../../Users/RegisteredUser";

function CameraButton({props}) {

    const handleChange = (e)=>{
        let url = URL.createObjectURL(e.target.files[0]);
        RegisteredUser.addMessageToConvo(props.username, props.convo, {
            sender: true, type: "img", time: new Date(), content: url
        });
        props.setConvo();
    }

    return (
        <span>
            <label htmlFor="image-input" className="padding form-label hover-pointer"> <i className="bi bi-input bi-image"/></label>
            <input accept="image/*" type="file" onChange={handleChange} className="hide-stuff filename" id="image-input"/>
        </span>
    )
}

export default CameraButton;
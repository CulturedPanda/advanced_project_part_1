import VideoButton from "../../../../../Conversation/InputBar/VideoButton";

function ChangePictureButton({props}){

    return(<div>
        <label htmlFor="image-input" className="form-label padding">Change profile picture</label>
            <VideoButton/>
        </div>
    )
}

export default ChangePictureButton;
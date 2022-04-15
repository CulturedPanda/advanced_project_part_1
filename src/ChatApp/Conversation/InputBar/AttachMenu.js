import CameraButton from "./CameraButton";
import VideoButton from "./VideoButton";
import MicButton from "./MicButton";

function AttachMenu({props, openRecordMessageModal}) {
    return (
        <span>
            <CameraButton props={{username: props.username, convo: props.convo, setConvo: props.setConvo}}/>
            <VideoButton props={{username: props.username, convo: props.convo, setConvo: props.setConvo}}/>
            <MicButton openRecordMessageModal={openRecordMessageModal}/>
        </span>
    )
}

export default AttachMenu;
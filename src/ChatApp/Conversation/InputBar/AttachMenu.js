import VideoButton from "./VideoButton";
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";

function AttachMenu() {
    return (
        <span>
            <VideoButton/>
            <CameraButton/>
            <MicButton/>
        </span>
    )
}

export default AttachMenu;
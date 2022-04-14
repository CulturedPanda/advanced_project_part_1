import CameraButton from "./CameraButton";
import VideoButton from "./VideoButton";
import MicButton from "./MicButton";

function AttachMenu() {
    return (
        <span>
            <CameraButton/>
            <VideoButton/>
            <MicButton/>
        </span>
    )
}

export default AttachMenu;
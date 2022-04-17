import {useState} from "react";
import RegisteredUser from "../../../../Users/RegisteredUser";
import {Button, Modal} from "react-bootstrap";

let mediaRecorder;
let mediaStream;

function RecordMessageModal(props) {

    const [isRecording, setIsRecording] = useState(false);

    function onClick() {
        if (isRecording) {
            // stop record
            mediaRecorder.stop()
            mediaStream.getTracks()[0].stop();
            setIsRecording(false);
            // send message to chat
        } else {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(stream => {
                            mediaStream = stream;
                            mediaRecorder = new MediaRecorder(stream);
                            if (mediaRecorder) {
                                setIsRecording(true);
                                mediaRecorder.start();
                                const audioChunks = [];
                                mediaRecorder.addEventListener("dataavailable", event => {
                                    audioChunks.push(event.data);
                                });

                                mediaRecorder.addEventListener("stop", () => {
                                    const audioBlob = new Blob(audioChunks);
                                    const audioUrl = URL.createObjectURL(audioBlob);
                                    RegisteredUser.addMessageToConvo(props.username, props.convo, {
                                        sender: true, type: "audio", time: new Date(), content: audioUrl
                                    });
                                    mediaRecorder = null;
                                    mediaStream = null;
                                    props.onHide();
                                    props.setConvo();
                                });
                            }
                        });
                });
        }
    }

    return (
        <Modal
            show={props.show}
            size="sm"
            aria-labelledby="record-modal"
            centered
        >
            <Modal.Header closeButton onClick={props.onHide}>
                <Modal.Title id="record-modal">
                    Record message
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button onClick={onClick}>{isRecording ? 'Stop' : 'Record'}</Button>
            </Modal.Body>
        </Modal>
    );
}

export default RecordMessageModal;
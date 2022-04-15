import AttachMenu from "./AttachMenu";
import {Button, Modal, OverlayTrigger, Popover} from "react-bootstrap";
import React, {useEffect} from "react";
import $ from "jquery"
import RegisteredUser from "../../../Users/RegisteredUser";

const audioChunks = [];

function RecordMessageModal(props) {
    const [mediaStream, setMediaStream] = React.useState(null);
    const [mediaRecorder, setMediaRecorder] = React.useState(null);
    const [isRecording, setIsRecording] = React.useState(false);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);

            setMediaStream(stream);
            setMediaRecorder(mediaRecorder);
        });
    }, [])

    useEffect(() => {
        if (mediaRecorder){
            mediaRecorder.ondataavailable = e => {
                audioChunks.push(e.data);
            }
        }
    }, [mediaRecorder])

    function onClick() {
        if (isRecording) {
            // stop record
            mediaRecorder.stop()
            setIsRecording(false);

            console.log(audioChunks)
            const audioBlob = new Blob(audioChunks, {type: "audio/ogg; codecs=opus"});
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log(audioUrl)
            const audio = new Audio(audioUrl)
            audio.play();
            // send message to chat
        } else {
            setIsRecording(true);
            mediaRecorder.start();
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Record message
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button onClick={onClick}>{isRecording ? 'Stop' : 'Record'}</Button>
            </Modal.Body>

        </Modal>
    );
}

const InputBar =  (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        let inputField = $("#message-input");
        RegisteredUser.addMessageToConvo(props.username, props.convo, {
            sender: true, type: "text", time: new Date(), content: inputField.val()
        })
        inputField.val("");
        props.setConvo();
    }

        return (
            <>
            <form onSubmit={handleSend}>
                <div>
                    <div className="input-group mb-3 input-message-pad">
                        <OverlayTrigger trigger="click" placemnt="top" rootClose={true} overlay={
                            <Popover id="attach-menu-popover">
                                <Popover.Body>
                                    <AttachMenu openRecordMessageModal={() => setModalShow(true)} props={{username: props.username, convo: props.convo, setConvo: props.setConvo}}/>
                                </Popover.Body>
                            </Popover>
                        }>
                            <button type="button" className="btn btn-success" id="paperclip-click">
                                <i className="bi bi-input bi-paperclip"/>
                            </button>
                        </OverlayTrigger>
                        <input type="text" id="message-input" className="form-control" placeholder="New message here..."
                               aria-label="Example text with button addon"
                               aria-describedby="button-addon1"/>
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
                </div>
            </form>
                <RecordMessageModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </>
        )
}

export default InputBar;
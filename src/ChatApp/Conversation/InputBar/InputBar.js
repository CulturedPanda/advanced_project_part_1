import AttachMenu from "./AttachMenu";
import {OverlayTrigger, Popover} from "react-bootstrap";
import {Component, createRef} from "react";
import $ from "jquery"
import RegisteredUser from "../../../Users/RegisteredUser";

class InputBar extends Component {

    handleSend = (e) => {
        e.preventDefault();
        let inputField = $("#message-input");
        RegisteredUser.addMessageToConvo(this.props.username, this.props.convo, {
            sender: true, type: "text", time: new Date(), content: inputField.val()
        })
        inputField.val("");
        this.props.setConvo();
    }

    render() {
        return (
            <form onSubmit={this.handleSend}>
                <div>
                    <div className="input-group mb-3 input-message-pad">
                        <OverlayTrigger trigger="click" placemnt="top" rootClose={true} overlay={
                            <Popover id="attach-menu-popover">
                                <Popover.Body>
                                    <AttachMenu/>
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
        )
    }
}

export default InputBar;
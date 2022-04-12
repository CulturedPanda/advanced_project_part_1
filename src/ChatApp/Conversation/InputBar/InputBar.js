import AttachMenu from "./AttachMenu";
import {OverlayTrigger, Popover} from "react-bootstrap";

function InputBar({props}) {
    return (
        <div>
            <div className="input-group mb-3 input-message-pad">
                <OverlayTrigger trigger="click" placemnt="top" rootClose={true} overlay={
                    <Popover id="attach-menu-popover">
                        <Popover.Body>
                            <AttachMenu/>
                        </Popover.Body>
                    </Popover>

                }
                >
                    <button type="button" className="btn btn-success" id="paperclip-click">
                        <i className="bi bi-input bi-paperclip"/>
                    </button>
                </OverlayTrigger>
                <input type="text" className="form-control" placeholder="New message here..."
                       aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
                <button type="button" className="btn btn-success">Send</button>
            </div>
        </div>
    )
}

export default InputBar;
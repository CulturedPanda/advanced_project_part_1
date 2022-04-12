import $ from "jquery";
import AttachMenu from "./AttachMenu";

function InputBar({props}) {
    const handleFocus = () => {
        let attachMenu = $("#other-text");
        attachMenu.show();
    }
    const handleBlur = () => {
        let attachMenu = $("#other-text");
        attachMenu.hide();
    }

    return (
        <div className="row col-12">
            <div className="input-group mb-3 chat-box-tray" >
                <button type="button" className="btn btn-success" id="paperclip-click" onFocus={handleFocus} >
                    <AttachMenu/>
                    <i className="bi bi-input bi-paperclip"/>
                </button>
                <input type="text" className="form-control" placeholder="New message here..." aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
                <button type="button" className="btn btn-success">Send</button>
            </div>
        </div>
    )
}

export default InputBar;
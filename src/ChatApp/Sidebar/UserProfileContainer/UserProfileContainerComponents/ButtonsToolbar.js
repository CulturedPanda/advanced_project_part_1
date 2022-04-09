import {Component} from "react";
import LogOutButton from "./ToolbarButtons/LogOutButton";

class ButtonsToolbar extends Component {
    render() {
        return (
            <div className="btn-group me-1 pe-3" role="group">
                <div>
                    <button type="button" className="btn no-effect-button btn-lg pe-0"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add contact">
                        <i className="bi bi-person-plus float-end"/>
                    </button>
                </div>
                <div className="me-2">
                    <LogOutButton props={{setLogIn: this.props.setLogIn}}/>
                </div>
                <div>
                    <button type="button" className="btn no-effect-button btn-lg ps-0"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="More options">
                        <i className="bi bi-three-dots-vertical float-end"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default ButtonsToolbar;
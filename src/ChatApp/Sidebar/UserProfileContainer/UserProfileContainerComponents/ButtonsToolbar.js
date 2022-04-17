import {Component} from "react";
import LogOutButton from "./ToolbarButtons/LogOutButton";
import AddContactButton from "./ToolbarButtons/AddContactButton";
import AddContactModal from "./AddContactModal";
import MoreOptionsDropdown from "./ToolbarButtons/MoreOptionsDropdown";


// Used to be more complex, so it's a class even though it should be a function component.
// We just did not want to re-write anything.
class ButtonsToolbar extends Component {
    render() {
        return (
            <div className="btn-group me-1 pe-3" role="group">
                <div>
                    <AddContactButton props={{setShow: this.props.setShow}}/>
                    <AddContactModal show={this.props.show} username={this.props.username}
                                     updateContacts={this.props.updateContacts} setShow={this.props.setShow}/>
                </div>
                <div className="me-2">
                    <LogOutButton props={{setLogIn: this.props.setLogIn}}/>
                </div>
                <div className="text-center">
                    <MoreOptionsDropdown props={{username: this.props.username,
                        updateProfilePicture: this.props.updateProfilePicture}}/>
                </div>
            </div>
        )
    }
}

export default ButtonsToolbar;
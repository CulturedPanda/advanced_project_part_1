import {Component} from "react";
import RegisteredUser from "../../../../Users/RegisteredUser";
import ImageNameContainer from "../../UserProfileContainer/UserProfileContainerComponents/ImageNameContainer";
import $ from "jquery"

class ContactContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TimeFromLastMessage: 0
        };
    }

    focusHandler() {
        let thisItem = $("#contact" + this.props.username);
        thisItem.addClass("active");
    }

    render() {
        return (
            <li className="d-grid list-group-item bg-light" id={"contact" + this.props.username}>
                <button onFocus={this.focusHandler} className="btn btn-flex justify-content-left">
                    <div>
                        <ImageNameContainer props={{username: this.props.username}}/>
                    </div>
                    <div className="small-text">
                        {RegisteredUser.getDescription(this.props.username)}
                    </div>
                </button>
            </li>
        )
    }
}

export default ContactContainer;
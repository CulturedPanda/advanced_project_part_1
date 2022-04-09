import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ImageNameContainer from "./UserProfileContainerComponents/ImageNameContainer";
import ButtonsToolbar from "./UserProfileContainerComponents/ButtonsToolbar";

class UserProfileContainer extends Component {

    render() {
        return (
            <div className="row bg-success rounded-2 pe-3 align-items-center">
                <div className="col-8">
                    <ImageNameContainer props={{username: this.props.username}}/>
                </div>
                <div className="col-4">
                    <div className="row justify-content-end me-2" role="toolbar">
                    <ButtonsToolbar setLogIn={this.props.setLogIn}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileContainer;
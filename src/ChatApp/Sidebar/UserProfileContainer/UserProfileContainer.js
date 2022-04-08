import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ImageNameContainer from "./UserProfileContainerComponents/ImageNameContainer";

class UserProfileContainer extends Component {

    render() {
        return (
            <div className="row bg-success rounded-2">
                <ImageNameContainer props={{username: this.props.username}}/>
                {this.props.children}
            </div>
        )
    }
}

export default UserProfileContainer;
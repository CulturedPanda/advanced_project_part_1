import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ImageNameContainer from "./UserProfileContainerComponents/ImageNameContainer";
import ButtonsToolbar from "./UserProfileContainerComponents/ButtonsToolbar";

class UserProfileContainer extends Component {

    render() {
        return (
            <div className="row bg-success pe-3 align-items-center">
                <div className="col-8">
                    <ImageNameContainer props={{username: this.props.username, renderNum: this.props.renderNum}}/>
                </div>
                <div className="col-4">
                    <div className="row justify-content-end me-2" role="toolbar">
                        {this.props.renderButtons && <ButtonsToolbar setLogIn={this.props.setLogIn}
                                                                     username={this.props.username}
                                                                     setUpdate={this.props.setUpdate}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileContainer;
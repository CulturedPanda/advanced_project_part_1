import CameraButton from "../../../../../Conversation/InputBar/CameraButton";
import {Component} from "react";
import RegisteredUser from "../../../../../../Users/RegisteredUser";

class ChangePictureButton extends Component {

    handleClick = (e) => {
        e.stopPropagation();
    }

    handleChange = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        RegisteredUser.updateProfileImg(this.props.username, url);
        this.props.updateProfilePicture();
    }

    render() {
        return (
            <div>
                <label htmlFor="profile-image-input" className="form-label padding">Change profile picture</label>
                <span>
            <label htmlFor="profile-image-input" className="padding form-label hover-pointer"> <i
                className="bi bi-input bi-image"/></label>
            <input accept="image/*" onClick={this.handleClick} onChange={this.handleChange}
                   type="file" className="hide-stuff filename" id="profile-image-input"/>
        </span>
            </div>
        )
    }
}

export default ChangePictureButton;
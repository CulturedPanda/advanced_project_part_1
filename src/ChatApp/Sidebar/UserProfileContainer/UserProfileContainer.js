import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ImageNameContainer from "./UserProfileContainerComponents/ImageNameContainer";
import ButtonsToolbar from "./UserProfileContainerComponents/ButtonsToolbar";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false, profilePicture: RegisteredUser.getImage(this.props.username)};
    }

    setShowModal = (val) => {
        this.setState({
            showModal: val
        })
    }

    updateProfilePicture = () => {
        this.setState({
            profilePicture: RegisteredUser.getImage(this.props.username)
        });
    }


    render() {
        return (
            <div className="row bg-success pe-3 align-items-center">
                <div className="col-8">
                    <ImageNameContainer props={{
                        username: this.props.username,
                        renderNum: this.props.renderNum, profilePicture: this.state.profilePicture
                    }}/>
                </div>
                <div className="col-4">
                    <div className="row justify-content-end me-2" role="toolbar">
                        {this.props.renderButtons &&
                            <ButtonsToolbar setLogIn={this.props.setLogIn}
                                            username={this.props.username}
                                            updateContacts={this.props.updateContacts}
                                            setShow={this.setShowModal}
                                            show={this.state.showModal}
                                            updateProfilePicture={this.updateProfilePicture}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileContainer;
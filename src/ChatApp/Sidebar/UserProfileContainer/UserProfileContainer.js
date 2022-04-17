import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ImageNameContainer from "./UserProfileContainerComponents/ImageNameContainer";
import ButtonsToolbar from "./UserProfileContainerComponents/ButtonsToolbar";

class UserProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {showModal: false, profilePicture: RegisteredUser.getImage(this.props.username),
            nickname: RegisteredUser.getNickname(this.props.username)};
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

    updateNickname = ()=>{
        this.setState({
            nickname: RegisteredUser.getNickname(this.props.username)
        });
    }

    determineClasses = ()=>{
        if (this.props.renderButtons){
            return "row bg-success pe-3 align-items-center";
        }
        else{
            return "row bg-success col-12 ms-0";
        }
    }


    render() {
        return (
            <div className={this.determineClasses()}>
                <div className={this.props.renderButtons ? "col-8" : ""}>
                    <ImageNameContainer props={{
                        username: this.props.username,
                        renderNum: this.props.renderNum, profilePicture: this.state.profilePicture,
                        nickname: this.state.nickname
                    }}/>
                </div>
                {this.props.renderButtons &&
                <div className="col-4">
                    <div className="row justify-content-end me-2" role="toolbar">
                            <ButtonsToolbar setLogIn={this.props.setLogIn}
                                            username={this.props.username}
                                            updateContacts={this.props.updateContacts}
                                            setShow={this.setShowModal}
                                            show={this.state.showModal}
                                            updateProfilePicture={this.updateProfilePicture}
                                            updateNickname={this.updateNickname}/>
                    </div>
                </div>}
            </div>
        )
    }
}

export default UserProfileContainer;
import {Component} from "react";
import RegisteredUser from "../../../../Users/RegisteredUser";
import ImageNameContainer from "../../UserProfileContainer/UserProfileContainerComponents/ImageNameContainer";
import $ from "jquery"

class ContactContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastMessageDate: RegisteredUser.getLastSeen(this.props.user, this.props.username)
        };
    }

    updateTime = ()=>{
        this.setState(
            {lastMessageDate: RegisteredUser.getLastSeen(this.props.user, this.props.username)}
        );
    }

    componentDidMount() {
        setInterval(this.updateTime, 60000);
    }

    timeFromLast = () => {
        let timeDelta = Math.floor((new Date() - this.state.lastMessageDate) / 60000);
        if (timeDelta === 0) {
            return "Just now";
        } else if (timeDelta < 60) {
            return timeDelta + " minutes ago";
        }
        else if(timeDelta < 1440){
            return Math.floor(timeDelta / 60) + " hours ago";
        }
        else{
            let date = this.state.lastMessageDate;
            let day = date.getDate().toString().padStart(2, "0");
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
    }

    focusHandler = () => {
        let thisItem = $("#contact" + this.props.username);
        thisItem.addClass("active border-primary border-primary border-2");
        this.props.setConvo(this.props.username);
    }

    blurHandler = () => {
        let thisItem = $("#contact" + this.props.username);
        thisItem.removeClass("active border-primary border-2");
    }


    render() {
        return (
            <li className="d-grid list-group-item bg-light hover-pointer mw-50" id={"contact" + this.props.username}>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}
                        className="btn no-effect-button text-start btn-flex justify-content-left break-text">
                    <div className="col">
                        <div className="break-text">
                            <ImageNameContainer props={{username: this.props.username,
                                nickname: RegisteredUser.getNickname(this.props.username),
                                renderNum: false, profilePicture: RegisteredUser.getImage(this.props.username)}}/>
                            <span className="float-end small-text">
                                {this.timeFromLast()}
                            </span>
                            <div className="small-text break-text">
                                {RegisteredUser.getDescription(this.props.username)}
                            </div>
                        </div>
                    </div>
                </button>
            </li>
        )
    }
}

export default ContactContainer;
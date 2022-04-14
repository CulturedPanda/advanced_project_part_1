import InputBar from "./InputBar/InputBar";
import AttachMenu from "./InputBar/AttachMenu";
import attachMenu from "./InputBar/AttachMenu";
import ConversationContainer from "./ConvoContainer/ConversationContainer";
import UserProfileContainer from "../Sidebar/UserProfileContainer/UserProfileContainer";
import {Component} from "react";
import RegisteredUser from "../../Users/RegisteredUser";

class Conversation extends Component {


    render() {
        return (
            <div className="col-8" id="conversation">
                <UserProfileContainer username={this.props.convo} renderButtons={false} renderNum={false}/>
                <ConversationContainer convo={this.props.convoContent}/>
                <InputBar username={this.props.username} convo={this.props.convo} setConvo={this.props.setConvo}/>
            </div>
        )
    }

}

export default Conversation;
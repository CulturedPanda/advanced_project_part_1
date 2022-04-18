import InputBar from "./InputBar/InputBar";
import ConversationContainer from "./ConvoContainer/ConversationContainer";
import UserProfileContainer from "../Sidebar/UserProfileContainer/UserProfileContainer";
import {Component} from "react";

/**
 * class of the conversation in chat.
 */
class Conversation extends Component {

    /**
     * function renders all components of the chat conversation, including profile container, conversation container and input abr.
     * @returns {JSX.Element}
     */
    render() {
        return (
            <>{this.props.convo &&
                <div className="col-8" id="conversation">
                    <UserProfileContainer username={this.props.convo} renderButtons={false} renderNum={false}/>
                    <ConversationContainer convo={this.props.convoContent}/>
                    <InputBar username={this.props.username} convo={this.props.convo} setConvo={this.props.setConvo}/>
                </div>
            }
            </>
        )
    }

}

export default Conversation;
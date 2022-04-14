import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";

class ConversationContainer extends Component {
    generateChatBubbles =() =>{
        return(
            RegisteredUser.registeredUsers.getConvo("Panda", "Alice").messages.map((message)=>
                <ChatBubble key={message.content} content={message.content} sender={message.sender}/>
        ))
    }
    render(){
        return(
            <div> {this.generateChatBubbles()}</div>
        )
    }

}


/*        <div className="container-fluid chat-container overflow-lesser overflow-auto">
            <div className="chat-panel">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="chat-bubble chat-bubble-left">
                            Yo bro, whats up?
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-3 offset-md-9">
                        <div className="chat-bubble  chat-bubble-right">
                            I hate my life man
                        </div>
                    </div>
                </div>

            </div>
        </div>*/

export default ConversationContainer;
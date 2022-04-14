import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ChatBubble from "./ChatBubble";

class ConversationContainer extends Component {
    generateChatBubbles =() =>{
        return(
            RegisteredUser.getConvo("Panda", "Alice").map((message)=>
                <ChatBubble key={message.content} content={message.content} sender={message.sender}/>
        ))
    }
    render(){
        return(
            <div className="container-fluid chat-container overflow-lesser overflow-auto">
                <div className="chat-panel">
                    {this.generateChatBubbles()}
                </div>
            </div>
        )
    }

}

export default ConversationContainer;
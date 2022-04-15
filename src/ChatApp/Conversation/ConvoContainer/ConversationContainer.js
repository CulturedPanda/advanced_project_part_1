import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import ChatBubble from "./ChatBubble";

class ConversationContainer extends Component {
    generateChatBubbles =() =>{
        return(
            this.props.convo.map((message)=>
                <ChatBubble key={message.key} content={message.content} time={message.time}
                            sender={message.sender} type={message.type}/>
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
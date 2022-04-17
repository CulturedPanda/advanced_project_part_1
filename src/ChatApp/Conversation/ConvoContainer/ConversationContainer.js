import {Component} from "react";
import ChatBubble from "./ChatBubble";
import Utils from "../../../Misc/Utils";

class ConversationContainer extends Component {
    generateChatBubbles =() =>{
        return(
            this.props.convo.map((message)=>
                <ChatBubble key={message.key} content={message.content} time={message.time}
                            sender={message.sender} type={message.type}/>
        ))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Utils.scrollToBottom("convo-container");
    }

    render(){
        return(
            <div className="container-fluid chat-container overflow-lesser overflow-auto" id="convo-container">
                <div className="chat-panel">
                    {this.generateChatBubbles()}
                </div>
            </div>
        )
    }

}

export default ConversationContainer;
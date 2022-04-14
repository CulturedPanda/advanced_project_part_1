import {Component} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";

class ChateBubble extends Component{
    generateContent = () =>{
        if (this.props.sender){
            return(<div className="chat-bubble chat-bubble-right"</div>)
        }
        else{
            return(<div className="chat-bubble chat-bubble-right"</div>)
        }
    }

    render(){
        return(<div>{this.generateContent()}<\div>)
    }
}
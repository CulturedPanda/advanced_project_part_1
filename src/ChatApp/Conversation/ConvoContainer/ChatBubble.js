import {Component} from "react";

class ChatBubble extends Component {

    render() {
        return (
            <>
                {this.props.sender &&
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble-left">
                                {this.props.content}
                            </div>
                        </div>
                    </div>}
                {!this.props.sender &&
                    <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                            <div className="chat-bubble  chat-bubble-right">
                                {this.props.content}
                            </div>
                        </div>
                    </div>}
            </>
        )
    }
}

export default ChatBubble;
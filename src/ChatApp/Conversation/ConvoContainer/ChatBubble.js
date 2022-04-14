import {Component} from "react";

class ChatBubble extends Component {

    parseTime = () => {
        let date = new Date(this.props.time);
        let minutes = date.getMinutes().toString().padStart(2, "0");
        let hours = date.getHours().toString().padStart(2, "0");
        return hours + ":" + minutes;
    }

    determineSide = () => {
        let side = this.props.sender ? "left" : "right"
        return "chat-bubble chat-bubble-" + side;
    }

    // TODO: Fill class type
    determineMargin = () => {
        let side = this.props.sender ? "" : "offset-md-9"
        let classType;
        if (this.props.type === "text"){
            //classType = "small-text";
        }
        else if(this.props.type === "video"){
            // Fill
        }
        else if(this.props.type === "img"){
            // Fill
        }
        else{
            // Fill for audio
        }
        return "col-md-3 " + side + " " + classType;
    }

    createContent = () => {
        if (this.props.type === "text") {
            return this.props.content;
        } else if (this.props.type === "img") {
            return (<img className="chat-img" src={this.props.content}/>)
        } else if (this.props.type === "video") {
            return (<video width="100%" height="100%" controls>
                <source src={this.props.content}/>
            </video>)
        }
    }

    // TODO: Fix needing to scroll down when sending messages, auto scroll down instead.
    // TODO: Auto scroll to last message when switching contacts.
    render() {
        return (
            <>
                <div className="row no-gutters">
                    <div className={this.determineMargin()}>
                        <div className={this.determineSide()}>
                            <span>
                                {this.createContent()}
                            </span>
                            {/*// TODO: Set time to the bottom right corner*/}
                            <span className="very-small-text float-end">
                                {this.parseTime()}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChatBubble;
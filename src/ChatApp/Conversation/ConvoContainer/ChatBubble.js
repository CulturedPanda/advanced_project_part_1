import {Component} from "react";

class ChatBubble extends Component {

    parseTime = () => {
        let date = new Date(this.props.time);
        return date.getHours() + ":" + date.getMinutes();
    }

    determineSide = () => {
        let side = this.props.sender ? "left" : "right"
        return "chat-bubble chat-bubble-" + side;
    }

    determineMargin = () => {
        let side = this.props.sender ? "" : "offset-md-9"
        return "col-md-3 " + side;
    }

    render() {
        return (
            <>
                <div className="row no-gutters">
                    <div className={this.determineMargin()}>
                        <div className={this.determineSide()}>
                                <span>
                                    <span>
                                        {this.props.content}
                                    </span>
                                    <span className="very-small-text float-end">
                                        {this.parseTime()}
                                    </span>
                                </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChatBubble;
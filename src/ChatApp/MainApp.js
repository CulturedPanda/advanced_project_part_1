import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";
import {Component} from "react";
import RegisteredUser from "../Users/RegisteredUser";

/**
 * The main app class, holds all the components of the app and manages some of their states.
 */
class MainApp extends Component {

    constructor(props) {
        super(props);
        this.state = {currentConvo: "", convoContent: RegisteredUser.getConvo(this.props.username, "")}
    }

    /**
     * Sets who the current conversation is with, and loads their messages.
     * @param convoWith the user the current covnersation is with.
     */
    setConvo = (convoWith) => {
        this.setState({
            currentConvo: convoWith,
            convoContent: RegisteredUser.getConvo(this.props.username, convoWith)
        })
    }

    /**
     * Loads the messages in the conversation after they were updated.
     */
    convoContentSetter = () => {
        this.setState({
            convoContent: RegisteredUser.getConvo(this.props.username, this.state.currentConvo)
        })
    }


    render() {
        return (
            <div className="container-fluid p-5 pb-2" id="main-app-div">
                <div className="row">
                    <Sidebar setLogIn={this.props.setLogIn} username={this.props.username} setConvo={this.setConvo}/>
                    <Conversation convo={this.state.currentConvo}
                                  convoContent={this.state.convoContent}
                                  setConvo={this.convoContentSetter}
                                  username={this.props.username}/>
                </div>
            </div>
        )
    }
}

export default MainApp;
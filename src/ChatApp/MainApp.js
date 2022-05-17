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
        this.state = {currentConvo: "", convoContent: null,
            contactNickname: null, valid: false}
    }

    async componentDidMount() {
        this.setState({
            currentConvo: "",
            convoContent: await RegisteredUser.getConvo(this.props.username, ""),
            contactNickname: null,
            valid: true
        });
    }

    /**
     * Sets who the current conversation is with, and loads their messages.
     * @param convoWith the user the current covnersation is with.
     */
    setConvo = async (convoWith) => {
        this.setState({
            currentConvo: convoWith,
            convoContent: await RegisteredUser.getConvo(this.props.username, convoWith),
            contactNickname: await RegisteredUser.getNickname(convoWith)
        })
    }

    /**
     * Loads the messages in the conversation after they were updated.
     */
    convoContentSetter = async () => {
        this.setState({
            convoContent: await RegisteredUser.getConvo(this.props.username, this.state.currentConvo)
        })
    }


    render() {
        return (
            <div className="container-fluid p-5 pb-2" id="main-app-div">
                {this.state.valid &&
                    <div className="row">
                        <Sidebar setLogIn={this.props.setLogIn} username={this.props.username} setConvo={this.setConvo}/>
                        <Conversation convo={this.state.currentConvo}
                                      convoContent={this.state.convoContent}
                                      setConvo={this.convoContentSetter}
                                      username={this.props.username}
                                      nickname={this.state.contactNickname}/>
                    </div>}
            </div>
        )
    }
}

export default MainApp;
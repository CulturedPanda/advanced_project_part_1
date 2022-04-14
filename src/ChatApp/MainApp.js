import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";
import {Component, useState} from "react";
import RegisteredUser from "../Users/RegisteredUser";

class MainApp extends Component{

    constructor(props) {
        super(props);
        this.state = {currentConvo: "Alice", convoContent: RegisteredUser.getConvo(this.props.username, "Alice")}
    }

    setConvo = (convoWith)=>{
        this.setState({
            currentConvo: convoWith,
            convoContent: RegisteredUser.getConvo(this.props.username, convoWith)
        })
    }

    convoContentSetter = ()=>{
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
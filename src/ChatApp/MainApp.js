import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";
import {useState} from "react";

function MainApp({props}) {

    const [currentConvo, convoSetter] = useState(null);

    return (
        <div className="container-fluid p-5 pb-2" id="main-app-div">
            <div className="row">
                <Sidebar setLogIn={props.setLogIn} username={props.username} setConvo={convoSetter}/>
                <Conversation convo={currentConvo}/>
            </div>
        </div>

    )
}

export default MainApp;
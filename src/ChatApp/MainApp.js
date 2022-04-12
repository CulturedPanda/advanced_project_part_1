import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";

function MainApp({props}) {
    return (
        <div className="container-fluid p-5 pb-2" id="main-app-div">
            <div className="row">
                <Sidebar setLogIn={props.setLogIn}/>
                <Conversation/>
            </div>
        </div>

    )
}

export default MainApp;
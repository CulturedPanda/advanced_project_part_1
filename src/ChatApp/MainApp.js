import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";

function MainApp() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <Conversation></Conversation>
            </div>
        </div>

    )
}

export default MainApp;
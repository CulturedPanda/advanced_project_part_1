import Conversation from "./Conversation/Conversation";
import Sidebar from "./Sidebar/Sidebar";

function MainApp() {
    return (
        <div className="container-fluid p-5 pb-2">
            <div className="row">
                <Sidebar></Sidebar>
                <Conversation></Conversation>
            </div>
        </div>

    )
}

export default MainApp;
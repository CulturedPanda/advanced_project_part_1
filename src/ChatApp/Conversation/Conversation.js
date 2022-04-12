import InputBar from "./InputBar/InputBar";
import AttachMenu from "./InputBar/AttachMenu";
import attachMenu from "./InputBar/AttachMenu";
import ConversationContainer from "./ConvoContainer/ConversationContainer";
import UserProfileContainer from "../Sidebar/UserProfileContainer/UserProfileContainer";

function Conversation() {
    return (
        <div className="col">
            <UserProfileContainer username="Alice" renderButtons={false} renderNum={false}/>
            <ConversationContainer/>
            <InputBar props={{attachMenu: attachMenu}}>
            </InputBar>
        </div>
    )

}

export default Conversation;
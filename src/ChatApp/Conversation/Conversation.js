import InputBar from "./InputBar/InputBar";
import AttachMenu from "./InputBar/AttachMenu";
import attachMenu from "./InputBar/AttachMenu";
import ChatBox from "./InputBar/ChatBox";
import UserProfileContainer from "../Sidebar/UserProfileContainer/UserProfileContainer";

function Conversation() {
    return (
        <div className="col-8">
            <UserProfileContainer username="Alice" renderButtons={false} renderNum={false}/>
            <ChatBox/>
            <InputBar props={{attachMenu: attachMenu}}>
            </InputBar>
        </div>
    )

}

export default Conversation;
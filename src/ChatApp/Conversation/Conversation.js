import InputBar from "./InputBar/InputBar";
import AttachMenu from "./InputBar/AttachMenu";
import attachMenu from "./InputBar/AttachMenu";

function Conversation(){
    return(
        <div className="col-8">
            <InputBar props={{attachMenu: attachMenu}}>
            </InputBar>
        </div>
    )

}
export default Conversation;
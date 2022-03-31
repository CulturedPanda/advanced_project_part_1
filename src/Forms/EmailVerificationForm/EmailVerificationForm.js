import WelcomeMessage from "./WelcomeMessage";
import VerifierField from "./EmailVerificationComponents/VerifierField";
import {useRef} from "react";
import PendingUser from "../../Users/PendingUser";
import Utils from "../../Utils";
import $ from "jquery";

function EmailVerificationForm({props}){

    const textRef = useRef("");

    let verifyUser = ()=>{
        let code = textRef.current.value;
        let field = $("#verification-code-input");
        if (code.length !== 6){
            field.addClass("border-danger");
            $("#format-error").show();
        }
        if (PendingUser.canVerify(props.username, code)){
            PendingUser.addUser(props.username);
        }
        else{
            field.addClass("border-danger");
            $("#verification-error").show();
        }
    }

    return (
        <div>
            {props.children}
            <VerifierField textRef={textRef}/>
            <div className="col text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={verifyUser}>Submit</button>
            </div>
        </div>
    )
}

export default EmailVerificationForm;
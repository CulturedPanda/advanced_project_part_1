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
        let text = $("#format-error");
        if (code.length !== 6){
            field.addClass("border-danger");
            text.show();
        }
        if (PendingUser.canVerify(props.username, code)){
            PendingUser.addUser(props.username);
            $("#verify-form").submit();
        }
        else{
            field.addClass("border-danger");
            text.hide();
            $("#verification-error").show();
        }
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        verifyUser();
    }

    return (
        <form id="verify-form" onSubmit={handleSubmit}>
            {props.children}
            <VerifierField textRef={textRef}/>
            <div className="col text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={verifyUser}>Submit</button>
            </div>
        </form>
    )
}

export default EmailVerificationForm;
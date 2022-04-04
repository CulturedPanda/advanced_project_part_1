import VerifierField from "./EmailVerificationComponents/VerifierField";
import {useRef} from "react";
import PendingUser from "../../Users/PendingUser";
import Utils from "../../Utils";
import $ from "jquery";
import VerificationFormText from "./EmailVerificationComponents/VerificationFormText";

function EmailVerificationForm({props}){

    const textFormRef = useRef("");

    let verifyUser = ()=>{
        let code = textFormRef.current.value;
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
            <VerificationFormText props={{from: props.from}}/>
            <VerifierField props={{textRef: textFormRef, username: props.username}}/>
            <div className="col text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={verifyUser}>Submit</button>
            </div>
        </form>
    )
}

export default EmailVerificationForm;
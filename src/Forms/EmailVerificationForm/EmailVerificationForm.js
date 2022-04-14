import VerifierField from "./EmailVerificationComponents/VerifierField";
import {useRef} from "react";
import PendingUser from "../../Users/PendingUser";
import CookieHandling from "../../Misc/CookieHandling";
import $ from "jquery";
import VerificationFormText from "./EmailVerificationComponents/VerificationFormText";
import RegisteredUser from "../../Users/RegisteredUser";
import {useNavigate} from "react-router";
import BaseForm from "../BaseForm";

function EmailVerificationForm({props}) {

    const textFormRef = useRef("");

    const nav = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        let code = textFormRef.current.value;
        let field = $("#verification-code-input");
        let text = $("#format-error");
        if (code.length !== 6) {
            field.addClass("border-danger");
            text.show();
        }
        const onError = () => {
            field.addClass("border-danger");
            text.hide();
            $("#verification-error").show();
        }
        if (props.fromSignup) {
            if (PendingUser.canVerify(props.username, code)) {
                PendingUser.addUser(props.username);
                props.setFrom(false);
                props.setLogIn(true);
                nav("/")
            } else {
                onError();
            }
        } else {
            if (RegisteredUser.canVerify(props.username, code)) {
                nav("/forgot_password/reset_password");
            } else {
                onError();
            }
        }
    }

    return (
        <BaseForm>
            <form id="verify-form" onSubmit={handleSubmit}>
                <VerificationFormText props={{fromSignup: props.fromSignup}}/>
                <VerifierField props={{textRef: textFormRef, username: props.username}}/>
                <div className="col text-center mt-4">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </BaseForm>
    )
}

export default EmailVerificationForm;
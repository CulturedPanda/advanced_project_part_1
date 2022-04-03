import {Link} from "react-router-dom";
import UsernameField from "../LoginForm/LoginFormComponents/UsernameField";
import {useRef} from "react";
import SecretQuestionsField from "../SignUpForm/SignUpComponents/SecretQuestionsField";
import SecretQuestionFieldAnswerField from "../SignUpForm/SignUpComponents/SecretQuestionFieldAnswerField";
import RegisteredUser from "../../Users/RegisteredUser";
import $ from "jquery"
import InitialForgotPasswordFormText from "./InitialForgotPasswordComponents/InitialForgotPasswordFormText";

function InitialForgotPasswordForm({props}) {
    let usernameFormRef = useRef("");
    let usernameFormToggle = useRef(true);
    let questionFormRef = useRef("1");
    let answerFormRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (RegisteredUser.VerifySecretQuestion(usernameFormRef.current.value,
            questionFormRef.current.value, answerFormRef.current.value)) {
            $("#forgot-password-form").submit();
        } else {
            let warnText = $("#wrong-details-text");
            if (usernameFormToggle.current.checked) {
                warnText.text("Error: Incorrect username and / or security question and / or answer")
                warnText.show();
            }
            else{
                warnText.text("Error: Incorrect Email and / or security question and / or answer")
                warnText.show();
            }
        }
    }

    return (
        <form id="forgot-password-form" onSubmit={handleSubmit}>
            <InitialForgotPasswordFormText/>
            <div className="row">
                <UsernameField props={{
                    usernameRef: usernameFormRef, toggleRef: usernameFormToggle, current: "abc",
                    usernameDefault: true
                }}/>
            </div>
            <div className="row">
                <SecretQuestionsField props={{questionRef: questionFormRef}}/>
            </div>
            <div className="row">
                <SecretQuestionFieldAnswerField props={{answerRef: answerFormRef}}/>
            </div>
            <div className="col text-center mb-2">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div id="wrong-details-text" className="row mb-3 error-text"/>
            <div className="row">
                <Link to="/">I remember my password</Link>
            </div>
        </form>
    )
}

export default InitialForgotPasswordForm;
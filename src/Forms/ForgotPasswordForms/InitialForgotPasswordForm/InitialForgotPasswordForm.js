import {Link, Prompt} from "react-router-dom";
import UsernameField from "../../LoginForm/LoginFormComponents/UsernameField";
import {useRef, useState} from "react";
import SecretQuestionsField from "../../SignUpForm/SignUpComponents/SecretQuestionsField";
import SecretQuestionAnswerField from "../../SignUpForm/SignUpComponents/SecretQuestionAnswerField";
import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery"
import InitialForgotPasswordFormText from "./InitialForgotPasswordComponents/InitialForgotPasswordFormText";
import {useNavigate} from "react-router";

function InitialForgotPasswordForm({props}) {

    const nav = useNavigate();
    const [questionConfirm, questionConfirmSet] = useState(false);
    const [answerConfirm, answerConfirmSet] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (RegisteredUser.VerifySecretQuestion($("#login-username").val(),
            $("#secret-questions").val(), $("#secret-answer").val())) {
            nav("/forgot_password/verify");
        } else {
            let warnText = $("#wrong-details-text");
            if ($("#username-radio").is(":checked")) {
                warnText.text("Error: Incorrect username and / or security question and / or answer")
                warnText.show();
            }
            else{
                warnText.text("Error: Incorrect Email and / or security question and / or answer")
                warnText.show();
            }
        }
    }

    const clearText = ()=>{
        props.usernameSetter("");
    }

    return (
        <form id="forgot-password-form" onSubmit={handleSubmit}>
            <InitialForgotPasswordFormText/>
            <div className="row">
                <UsernameField props={{
                    username: props.usernameSetter, toggle: props.toggleSetter, current: props.username,
                    usernameDefault: props.toggle}}/>
            </div>
            <div className="row">
                <SecretQuestionsField props={{children: null, setConfirm: questionConfirmSet}}/>
            </div>
            <div className="row">
                <SecretQuestionAnswerField props={{setConfirm: answerConfirmSet}}/>
            </div>
            <div className="col text-center mb-2">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div id="wrong-details-text" className="row mb-3 error-text"/>
            <div className="row">
                <Link to="/" onClick={clearText}>I remember my password</Link>
            </div>
        </form>
    )
}

export default InitialForgotPasswordForm;
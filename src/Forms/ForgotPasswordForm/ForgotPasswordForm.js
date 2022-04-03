import {Link} from "react-router-dom";
import UsernameField from "../LoginForm/LoginFormComponents/UsernameField";
import {useRef} from "react";
import SecretQuestionsField from "../SignUpForm/SignUpComponents/SecretQuestionsField";
import SecretQuestionFieldAnswerField from "../SignUpForm/SignUpComponents/SecretQuestionFieldAnswerField";

function ForgotPasswordForm({props}){
    let usernameFormRef = useRef("");
    let usernameFormToggle = useRef(true);
    let questionFormRef = useRef("1");
    let answerFormRef = useRef("");
    return (
        <div>
            <div className="row">
                <UsernameField props={{usernameRef: usernameFormRef, toggleRef: usernameFormToggle, current: "abc",
                    usernameDefault: true}}/>
            </div>
            <div className="row">
                <SecretQuestionsField props={{questionRef: questionFormRef}}/>
            </div>
            <div className="row">
                <SecretQuestionFieldAnswerField props={{answerRef: answerFormRef}}/>
            </div>
            <div>
                <Link to="/">I remember my password</Link>
            </div>
        </div>
    )
}

export default ForgotPasswordForm;
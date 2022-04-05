import {Link, useSearchParams} from "react-router-dom";
import EmailField from "./SignUpComponents/EmailField";
import UsernameSignupField from "./SignUpComponents/UsernameSignupField";
import PasswordSignupField from "./SignUpComponents/PasswordSignupField";
import NicknameField from "./SignUpComponents/NicknameField";
import PhoneNumberField from "./SignUpComponents/PhoneNumberField";
import DateOfBirthField from "./SignUpComponents/DateOfBirthField";
import SecretQuestionsField from "./SignUpComponents/SecretQuestionsField";
import {useRef, useState} from "react";
import SecretQuestionDescriptor from "./SignUpComponents/SecretQuestionDescriptor";
import SecretQuestionAnswerField from "./SignUpComponents/SecretQuestionAnswerField";
import TermOfServiceField from "./SignUpComponents/TermsOfServiceField";
import PrivacyPolicyField from "./SignUpComponents/PrivacyPolicyField";
import $ from "jquery";
import PendingUser from "../../Users/PendingUser";
import {useNavigate} from "react-router";

function SignUpForm({props}) {

    // Complete abuse of states. Likely to be deleted when we have a server.
    const [userConfirm, userConfirmSet] = useState(false);
    const [passConfirm, passConfirmSet] = useState(false);
    const [passConfirmationConfirm, passConfirmationConfirmSet] = useState(false);
    const [emailConfirm, emailConfirmSet] = useState(false);
    const [nicknameConfirm, nicknameConfirmSet] = useState(false);
    const [secretQuestionConfirm, secretQuestionConfirmSet] = useState(false);
    const [secretAnswerConfirm, secretAnswerConfirmSet] = useState(false);
    const [phoneConfirm, phoneConfirmSet] = useState(false);


    const nav = useNavigate();

    //This function prevents then loss of info in refresh once we submit new user
    const handleSubmit = (event) => {
        event.preventDefault();
        let isTos = $("#tos-radio-check").is(":checked");
        let isPrivacyPolicy = $("#privacy-policy-radio-check").is(":checked");

        if (isTos && isPrivacyPolicy) {
            if (userConfirm && passConfirm && passConfirmationConfirm
                && emailConfirm && nicknameConfirm && secretQuestionConfirm && secretAnswerConfirm) {
                let username = $("#username-signup-field").val();
                let email = $("#email-signup-field").val();
                let password = $("#new-pass1").val();
                let nickname = $("#nickname").val();
                let phone = $("#phone").val();
                let dob = $("#birthday").val();
                let secretQuestion = $("#secret-questions").val();
                let secretAnswer = $("#secret-answer").val();
                props.username(username);
                props.from(true);
                new PendingUser({username: username, password: password,
                    email: email, phone: phone, dateOfBirth: dob, nickname: nickname,
                    secretQuestions: {question: secretQuestion, answer: secretAnswer}});
                nav("/verify_email");
            }
        }
        else{
            if(!isTos) {
                $("#invalid-tos").show();
            }
            if (!isPrivacyPolicy){
                $("#invalid-pp").show();
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <EmailField props={{setConfirm: emailConfirmSet}}/>
                <UsernameSignupField props={{setConfirm: userConfirmSet}}/>
                <PasswordSignupField props={{
                    setConfirmPass: passConfirmSet,
                    setConfirmationConfirm: passConfirmationConfirmSet,
                    renderRequired: true
                }}/>
                <NicknameField props={{setConfirm: nicknameConfirmSet}}/>
                <PhoneNumberField props={{setConfirm: phoneConfirmSet}}/>
                <DateOfBirthField/>
                <SecretQuestionsField props={{
                    setConfirm: secretQuestionConfirmSet,
                    children: <SecretQuestionDescriptor/>,
                    renderRequired: true
                }}/>
                <SecretQuestionAnswerField props={{setConfirm: secretAnswerConfirmSet, renderRequired: true}}/>
                <TermOfServiceField/>
                <PrivacyPolicyField/>
                <div className="d-grid gap-2 col-6 mx-auto mb-3">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div>
                <Link to="/">I already have an account</Link>
            </div>
        </form>
    )
}

export default SignUpForm;
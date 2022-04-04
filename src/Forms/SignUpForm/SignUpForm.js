import {Link} from "react-router-dom";
import EmailField from "./SignUpComponents/EmailField";
import UsernameSignupField from "./SignUpComponents/UsernameSignupField";
import PasswordSignupField from "./SignUpComponents/PasswordSignupField";
import NicknameField from "./SignUpComponents/NicknameField";
import PhoneNumberField from "./SignUpComponents/PhoneNumberField";
import DateOfBirthField from "./SignUpComponents/DateOfBirthField";
import GenderField from "./SignUpComponents/GenderField";
import SecretQuestionsField from "./SignUpComponents/SecretQuestionsField";
import {useRef} from "react";
import SecretQuestionDescriptor from "./SignUpComponents/SecretQuestionDescriptor";
import SecretQuestionFieldAnswerField from "./SignUpComponents/SecretQuestionFieldAnswerField";
import TermOfServiceField from "./SignUpComponents/TermsOfServiceField";
import PrivacyPolicyField from "./SignUpComponents/PrivacyPolicyField";

function SignUpForm() {
    let questionFormRef = useRef("1");
    let answerFormRef = useRef("");

    //This function prevents then loss of info in refresh once we submit new user
    function validateForm(event){
        event.preventDefault();
    }
    return (
        <form onSubmit={validateForm}>
            <div>
                <EmailField/>
                <UsernameSignupField/>
                <PasswordSignupField/>
                <NicknameField/>
                <PhoneNumberField/>
                <DateOfBirthField/>
                <GenderField/>
                <SecretQuestionsField props={{questionRef: questionFormRef, children: <SecretQuestionDescriptor/>}}/>
                <SecretQuestionFieldAnswerField props={{answerRef: answerFormRef}}/>
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
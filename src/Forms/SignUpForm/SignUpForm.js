import {Link, useSearchParams} from "react-router-dom";
import EmailField from "./SignUpComponents/EmailField";
import UsernameSignupField from "./SignUpComponents/UsernameSignupField";
import PasswordSignupField from "./SignUpComponents/PasswordSignupField";
import NicknameField from "./SignUpComponents/NicknameField";
import PhoneNumberField from "./SignUpComponents/PhoneNumberField";
import DateOfBirthField from "./SignUpComponents/DateOfBirthField";
import GenderField from "./SignUpComponents/GenderField";
import SecretQuestionsField from "./SignUpComponents/SecretQuestionsField";
import {useRef, useState} from "react";
import SecretQuestionDescriptor from "./SignUpComponents/SecretQuestionDescriptor";
import SecretQuestionAnswerField from "./SignUpComponents/SecretQuestionAnswerField";
import TermOfServiceField from "./SignUpComponents/TermsOfServiceField";
import PrivacyPolicyField from "./SignUpComponents/PrivacyPolicyField";

function SignUpForm() {

    // Complete abuse of states. Likely to be deleted when we have a server.
    const [userConfirm, userConfirmSet] = useState(false);
    const [passConfirm, passConfirmSet] = useState(false);
    const [passConfirmationConfirm, passConfirmationConfirmSet] = useState(false);
    const [emailConfirm, emailConfirmSet] = useState(false);
    const [nicknameConfirm, nicknameConfirmSet] = useState(false);
    const [secretQuestionConfirm, secretQuestionConfirmSet] = useState(false);
    const [secretAnswerConfirm, secretAnswerConfirmSet] = useState(false);
    const [phoneConfirm, phoneConfirmSet] = useState(false);


    //This function prevents then loss of info in refresh once we submit new user
    function validateForm(event){
        event.preventDefault();
    }
    return (
        <form onSubmit={validateForm}>
            <div>
                <EmailField props={{setConfirm: emailConfirmSet}}/>
                <UsernameSignupField props={{setConfirm: userConfirmSet}}/>
                <PasswordSignupField props={{setConfirmPass: passConfirmSet, setConfirmationConfirm: passConfirmationConfirmSet, renderRequired: true}}/>
                <NicknameField props={{setConfirm: nicknameConfirmSet}}/>
                <PhoneNumberField props={{setConfirm: phoneConfirmSet}}/>
                <DateOfBirthField/>
                <GenderField/>
                <SecretQuestionsField props={{setConfirm: secretQuestionConfirmSet, children: <SecretQuestionDescriptor/>, renderRequired: true}}/>
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
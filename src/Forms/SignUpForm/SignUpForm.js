import {Link} from "react-router-dom";
import EmailField from "./EmailField";
import UsernameSignupField from "./UsernameSignupField";
import PasswordSignupField from "./PasswordSignupField";
import NicknameField from "./NicknameField";
import PhonenumberField from "./PhonenumberField";
import DateOfBirthField from "./DateOfBirthField";
import GenderField from "./GenderField";
import SecretQuestionsField from "./SecretQuestionsField";

function SignUpForm() {
    return (
        <div>
            <div>
                <EmailField></EmailField>
                <UsernameSignupField></UsernameSignupField>
                <PasswordSignupField></PasswordSignupField>
                <NicknameField></NicknameField>
                <PhonenumberField></PhonenumberField>
                <DateOfBirthField></DateOfBirthField>
                <GenderField></GenderField>
                <SecretQuestionsField></SecretQuestionsField>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div>
                <Link to="/">I already have an account</Link>
            </div>
        </div>
    )
}

export default SignUpForm;
import {Link} from "react-router-dom";
import EmailField from "./SignUpComponents/EmailField";
import UsernameSignupField from "./SignUpComponents/UsernameSignupField";
import PasswordSignupField from "./SignUpComponents/PasswordSignupField";
import NicknameField from "./SignUpComponents/NicknameField";
import PhonenumberField from "./SignUpComponents/PhonenumberField";
import DateOfBirthField from "./SignUpComponents/DateOfBirthField";
import GenderField from "./SignUpComponents/GenderField";
import SecretQuestionsField from "./SignUpComponents/SecretQuestionsField";

function SignUpForm() {
    return (
        <form>
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
        </form>
    )
}

export default SignUpForm;
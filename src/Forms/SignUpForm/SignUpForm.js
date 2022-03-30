import {Link} from "react-router-dom";
import EmailField from "./EmailField";
import UsernameSignupField from "./UsernameSignupField";
import PasswordSignupField from "./PasswordSignupField";
import NicknameField from "./NicknameField";
import PhonenumberField from "./PhonenumberField";
import DateOfBirthField from "./DateOfBirthField";
import GenderField from "./GenderField";

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
            </div>
            <div>
                <Link to="/">I already have an account</Link>
            </div>
        </div>
    )
}

export default SignUpForm;
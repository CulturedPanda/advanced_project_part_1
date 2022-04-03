import {Link} from "react-router-dom";
import UsernameField from "../LoginForm/LoginFormComponents/UsernameField";
import {useRef} from "react";

function ForgotPasswordForm({props}){
    let usernameFormRef = useRef("");
    let usernameFormToggle = useRef(true);
    return (
        <div>
            <div>
                <UsernameField props={{usernameRef: usernameFormRef, toggleRef: usernameFormToggle, current: "abc",
                    usernameDefault: true}}/>
            </div>
            <div>
                <Link to="/">I remember my password</Link>
            </div>
        </div>
    )
}

export default ForgotPasswordForm;
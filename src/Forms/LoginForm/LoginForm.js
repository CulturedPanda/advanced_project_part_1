import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import ForgotPasswordForm from "../ForgotPasswordForm/ForgotPasswordForm";
import SignUpForm from "../SignUpForm/SignUpForm";

function LoginForm(){
    return(
        <div>
            <form className="form">
                <UsernameField></UsernameField>
                <PasswordField></PasswordField>
                <div>
                    New user?
                    <Link to="/sign_up">Sign up here</Link>
                </div>
                <div>
                    <Link to="/forgot_password">I forgot my password</Link>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;
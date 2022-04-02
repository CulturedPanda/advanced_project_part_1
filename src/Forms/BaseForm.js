import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import EmailVerificationForm from "./EmailVerificationForm/EmailVerificationForm";
import $ from "jquery";
import VerificationFormText from "./EmailVerificationForm/EmailVerificationComponents/VerificationFormText";

function BaseForm() {

    return (
        // Keeping this temporarily as get method. Need to work with this in mind.
        /* TODO : Change to post when we have a server */
        <div className="row align-items-center vw-100 vh-100">
            <div className="row col-md-4 offset-md-4 col-sm-12 col-xs-12 border
             border-primary border-3 rounded-3 bg-light" id="base-form" method="get" autoComplete="on">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginForm></LoginForm>}/>
                        <Route path="/sign_up" element={<SignUpForm></SignUpForm>}/>
                        <Route path="/forgot_password" element={<ForgotPasswordForm></ForgotPasswordForm>}/>
                        <Route path="/verify_email" element={
                            <EmailVerificationForm props={{username: "Yuval", children : <VerificationFormText/>}}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default BaseForm;
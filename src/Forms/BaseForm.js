import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import InitialForgotPasswordForm from "./ForgotPasswordForms/InitialForgotPasswordForm/InitialForgotPasswordForm";
import EmailVerificationForm from "./EmailVerificationForm/EmailVerificationForm";
import VerificationFormText from "./EmailVerificationForm/EmailVerificationComponents/VerificationFormText";
import $ from "jquery";
import React, {useRef, useState} from "react";
import TermsOfService from "../Policies/TermsOfService";

function BaseForm() {

    // Temporary fixes for passing data between the forms - needs to be redone when we have a server as this is
    // just straight up abuse.
    const [username, setUsername] = useState("");
    const [toggle, setToggle] = useState(true);
    const [from, setFrom] = useState(false);

    return (
        // Keeping this temporarily as get method. Need to work with this in mind.
        /* TODO : Change to post when we have a server */
        <div className="row align-items-center vw-100 vh-100">
            <div className="row col-md-4 offset-md-4 col-sm-12 col-xs-12 border
             border-primary border-3 rounded-3 bg-light" id="base-form">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginForm props={{username: setUsername, toggle: setToggle,
                            fromSetter: setFrom}}/>} />
                        <Route path="/sign_up" element={<SignUpForm props={{username: setUsername}}/>}/>
                        <Route path="/forgot_password" element={<InitialForgotPasswordForm
                            props={{username: username, usernameSetter: setUsername, toggle: toggle, toggleSetter: setToggle}}/>}/>
                        <Route path="/verify_email" element={
                            <EmailVerificationForm props={{username: "Yuval", from : "sign_up", fromSignup: true}}/>}/>
                        <Route path="/sign_up/terms_of_service" element={<TermsOfService></TermsOfService>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default BaseForm;
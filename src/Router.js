import {Redirect, Switch, Routes} from "react-router";
import {Route} from "react-router-dom";
import BaseForm from "./Forms/BaseForm";
import LoginForm from "./Forms/LoginForm/LoginForm";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";
import InitialForgotPasswordForm from "./Forms/ForgotPasswordForms/InitialForgotPasswordForm/InitialForgotPasswordForm";
import EmailVerificationForm from "./Forms/EmailVerificationForm/EmailVerificationForm";
import ForgotPasswordFormVerificationScreen
    from "./Forms/ForgotPasswordForms/ForgotPasswordFormVerificationScreen/ForgotPasswordFormVerificationScreen";
import ForgotPasswordFormResetPassword
    from "./Forms/ForgotPasswordForms/ForgotPasswordFormResetPassword/ForgotPasswordFormResetPassword";
import MainApp from "./ChatApp/MainApp";
import React, {useState} from "react";

function Router(){

    const [username, setUsername] = useState("");
    const [toggle, setToggle] = useState(true);
    const [from, setFrom] = useState(false);

    return(
        <Routes>
            {/*<Redirect from="/" to="/log_in"/>*/}
            <Route path="/log_in" element={<LoginForm props={{
                username: setUsername, toggle: setToggle,
                fromSetter: setFrom, passReset: from
            }}/>}/>
            <Route path="/sign_up" element={<SignUpForm props={{username: setUsername, from: setFrom}}/>}/>
            <Route path="/forgot_password" element={<InitialForgotPasswordForm
                props={{
                    username: username,
                    usernameSetter: setUsername,
                    toggle: toggle,
                    toggleSetter: setToggle
                }}/>}/>
            <Route path="*" element={<LoginForm props={{
                username: setUsername, toggle: setToggle,
                fromSetter: setFrom, passReset: from
            }}/>}/>
            <Route path="/verify_email" element={
                <EmailVerificationForm props={{username: username, fromSignup: from, setFrom: setFrom}}/>}/>
            <Route path="/forgot_password/verify" element={
                <ForgotPasswordFormVerificationScreen props={{username: username}}/>}/>
            <Route path="/forgot_password/reset_password" element={
                <ForgotPasswordFormResetPassword props={{username: username, setter: setFrom}}/>}/>
            <Route path="/chat" element={<MainApp/>}/>
        </Routes>
    )
}

export default Router;
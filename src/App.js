import logo from './logo.svg';
import './App.css';
import BaseForm from "./Forms/BaseForm";
import SharedDesign from "./SharedDesign/SharedDesign";
import PendingUser from "./Users/PendingUser";
import RegisteredUser from "./Users/RegisteredUser";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import Router from "./Router";

function App() {

    // Incredibly temporary methods where we make awful storage of sessions storage as our database.
    // This causes the temporary user in Pending user to not be so temporary (the hardcoded one),
    // but as this should all go away the moment we set up a server, we have decided to not try and debug this.
    PendingUser.pendingUsers.forEach(element => {
        sessionStorage.setItem(element.username + "pend", JSON.stringify(element));
        sessionStorage.setItem(element.email + "pend", JSON.stringify(element));
    });
    RegisteredUser.registeredUsers.forEach(element => {
        sessionStorage.setItem(element.username + "log", JSON.stringify(element));
        sessionStorage.setItem(element.email + "log", JSON.stringify(element));
    });

    const [username, setUsername] = useState("");
    const [toggle, setToggle] = useState(true);
    const [from, setFrom] = useState(false);
    return (
        <SharedDesign>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </SharedDesign>
    );
}

export default App;

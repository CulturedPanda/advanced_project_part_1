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
import Router from "./Misc/Router";
import Utils from "./Misc/Utils";
import registeredUser from "./Users/RegisteredUser";

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

    let cookie_verified = false;
    const cUsername = Utils.getCookie("username");
    const password = Utils.getCookie("password");
    if (cUsername && password){
        if (registeredUser.DoUserAndPasswordMatch(cUsername, password)
            || registeredUser.doEmailAndPasswordMatch(cUsername, password)){
            cookie_verified = true;
        }
    }

    const [userLoggedIn, setUserLoggedIn] = useState(cookie_verified);

    return (
        <SharedDesign>
            <BrowserRouter>
                <Router props={{loggedIn: userLoggedIn, setLoggedIn: setUserLoggedIn, username: cUsername}}/>
            </BrowserRouter>
        </SharedDesign>
    );
}

export default App;

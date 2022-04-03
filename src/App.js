import logo from './logo.svg';
import './App.css';
import LoginForm from "./Forms/LoginForm/LoginForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ForgotPasswordForm from "./Forms/ForgotPasswordForm/ForgotPasswordForm";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";
import BaseForm from "./Forms/BaseForm";
import SharedDesign from "./SharedDesign/SharedDesign";
import PendingUser from "./Users/PendingUser";
import RegisteredUser from "./Users/RegisteredUser";

function App() {

    // Incredibly temporary methods where we make awful storage of sessions storage as our database.
    PendingUser.pendingUsers.forEach(element => {
        sessionStorage.setItem(element.username + "pend", JSON.stringify(element));
        sessionStorage.setItem(element.email + "pend", JSON.stringify(element));
    });
    RegisteredUser.registeredUsers.forEach(element => {
        sessionStorage.setItem(element.username + "log", JSON.stringify(element));
        sessionStorage.setItem(element.email + "log", JSON.stringify(element));
    });
    return (
            <SharedDesign>
                <BaseForm/>
            </SharedDesign>
    );
}

export default App;

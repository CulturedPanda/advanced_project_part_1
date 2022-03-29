import logo from './logo.svg';
import './App.css';
import LoginForm from "./Forms/LoginForm/LoginForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ForgotPasswordForm from "./Forms/ForgotPasswordForm/ForgotPasswordForm";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";
import BaseForm from "./Forms/BaseForm";
import SharedDesign from "./SharedDesign/SharedDesign";

function App() {
    return (
        <div>
            <SharedDesign></SharedDesign>
            <BaseForm></BaseForm>
        </div>
    );
}

export default App;

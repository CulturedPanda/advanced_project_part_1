import logo from './logo.svg';
import './App.css';
import LoginForm from "./Forms/LoginForm/LoginForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ForgotPasswordForm from "./Forms/ForgotPasswordForm/ForgotPasswordForm";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm></LoginForm>}/>
                <Route path="/sign_up" element={<SignUpForm></SignUpForm>}/>
                <Route path="/forgot_password" element={<ForgotPasswordForm></ForgotPasswordForm>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

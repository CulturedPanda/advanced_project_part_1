import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

function BaseForm() {
    return (
        <div className="row align-items-center vw-100 vh-100">
            <form className="row col-md-4 offset-md-4 col-sm-12 col-xs-12 border
             border-primary border-3 rounded-3 bg-light">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginForm></LoginForm>}/>
                        <Route path="/sign_up" element={<SignUpForm></SignUpForm>}/>
                        <Route path="/forgot_password" element={<ForgotPasswordForm></ForgotPasswordForm>}/>
                    </Routes>
                </BrowserRouter>
            </form>
        </div>
    );
}

export default BaseForm;
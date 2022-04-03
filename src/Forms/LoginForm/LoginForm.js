import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import {useRef} from "react";
import RegisteredUser from "../../Users/RegisteredUser";
import $ from "jquery";
import Utils from "../../Utils";

function LoginForm() {

    const usernameFormRef = useRef("");
    const passwordFormRef = useRef("");
    let usernameFormToggle = useRef(true);
    const handleSubmit = () => {
        let username = usernameFormRef.current.value;
        let password = passwordFormRef.current.value;
        let isUsername = usernameFormToggle.current.checked;
        if (username === "" && password === "") {
            return
        }
        let wrongDetails = $("#wrong-details-text");
        if (isUsername) {
            if (RegisteredUser.DoUserAndPasswordMatch(username, password)) {
                wrongDetails.hide();
                $("#log-in-form").submit();
            } else {
                wrongDetails.text("Incorrect username or password");
                wrongDetails.show();
            }
        } else {
            if (RegisteredUser.doEmailAndPasswordMatch(username.toLowerCase(), password)) {
                wrongDetails.hide();
                $("#log-in-form").submit();
            } else {
                wrongDetails.text("Incorrect Email or password");
                wrongDetails.show();
            }
        }
    }


    return (
        <form onKeyUp={event => Utils.onEnter(event, handleSubmit)} id="log-in-form">
            <UsernameField props={{usernameRef: usernameFormRef, toggleRef: usernameFormToggle, current: "",
                usernameDefault: true}}/>
            <PasswordField passwordRef={passwordFormRef}/>
            <div id="wrong-details-text" className="mb-3 error-text"/>
            <div className="col text-center">
                <button onClick={handleSubmit}
                        type="button" className="btn btn-primary mb-3 col-2">Log in
                </button>
            </div>
            <div className="mb-3">
                New user?
                <Link to="/sign_up"> Sign up here</Link>
            </div>
            <div>
                <Link to="/forgot_password">I forgot my password</Link>
            </div>
        </form>
    )
}


export default LoginForm;
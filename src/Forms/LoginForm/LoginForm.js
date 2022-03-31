import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import {useRef} from "react";
import RegisteredUser from "../../Users/RegisteredUser";
import $ from "jquery";
import Utils from "../../Utils";
import UsernameEmailRadio from "./LoginFormComponents/UsernameEmailRadio";

function LoginForm() {

    const usernameRef = useRef("");
    const passwordRef = useRef("");
    let usernameToggle = useRef(true);
    const handleSubmit = () => {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let isUsername = usernameToggle.current.checked;
        if (username === "" && password === "") {
            return
        }
        let wrongDetails = $("#wrong-details-text");
        if (isUsername) {
            if (RegisteredUser.DoUserAndPasswordMatch(username, password)) {
                wrongDetails.hide();
                $("#base-form").submit();
            } else {
                wrongDetails.text("Incorrect username or password");
                wrongDetails.show();
            }
        } else {
            if (RegisteredUser.doEmailAndPasswordMatch(username.toLowerCase(), password)) {
                wrongDetails.hide();
                $("#base-form").submit();
            } else {
                wrongDetails.text("Incorrect Email or password");
                wrongDetails.show();
            }
        }
    }


    return (
        <div onKeyUp={event => Utils.onEnter(event, handleSubmit)}>
            <UsernameField usernameRef={usernameRef} toggleRef={usernameToggle}/>
            <PasswordField passwordRef={passwordRef}/>
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
        </div>
    )
}


export default LoginForm;
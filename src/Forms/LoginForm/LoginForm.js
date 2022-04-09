import {Link, Prompt} from "react-router-dom";
import {Navigate} from "react-router";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import {useRef} from "react";
import RegisteredUser from "../../Users/RegisteredUser";
import $ from "jquery";
import Utils from "../../Misc/Utils";
import {useNavigate} from "react-router";
import ShowPasswordButton from "./LoginFormComponents/ShowPasswordButton";
import BaseForm from "../BaseForm";
import RememberMeCheckbox from "./LoginFormComponents/RememberMeCheckbox";

function LoginForm({props}) {

    const nav = useNavigate();

    const handleVerification = (username, password) => {
        let isUsername = $("#username-radio").is(":checked");
        if (username === "" && password === "") {
            return
        }
        const onSuccess = () => {
            wrongDetails.hide();
            props.setLogIn(true);
            if ($("#remember-me-checkbox").is(":checked")) {
                Utils.setCookie("username", username, 7);
                Utils.setCookie("password", password, 7);
            }
            props.username("");
            nav("/chat");
        }
        let wrongDetails = $("#wrong-details-text");
        if (isUsername) {
            if (RegisteredUser.DoUserAndPasswordMatch(username, password)) {
                onSuccess();
            } else {
                wrongDetails.text("Incorrect username or password");
                wrongDetails.show();
            }
        } else {
            if (RegisteredUser.doEmailAndPasswordMatch(username.toLowerCase(), password)) {
                onSuccess();
            } else {
                wrongDetails.text("Incorrect Email or password");
                wrongDetails.show();
            }
        }
    }

    const handleSubmit = (e, username, password) => {
        e.preventDefault()
        handleVerification(username, password)
    }

    const resetFrom = () => {
        props.fromSetter(false);
    }


    return (
        <BaseForm>
            <div className="text-center">
                <p className="fs-3">Log in</p>
            </div>
            <form onSubmit={event => handleSubmit(event, $("#login-username").val(), $("#login-pass").val())}
                  id="log-in-form">

                {props.passReset && <div className="
            col-8 border border-success rounded mb-4 padding-5 shadow-sm bg-light p-2 text-success">
                    Password reset successfully. You may now log in.
                </div>}
                <UsernameField
                    props={{username: props.username, toggle: props.toggle, current: "", usernameDefault: true}}/>
                <PasswordField/>
                <div id="wrong-details-text" className="mb-3 error-text"/>
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary mb-3 col-2">Log in</button>
                </div>
                <RememberMeCheckbox/>
                <div className="mb-3 float-end">
                    New user?
                    <Link to="/sign_up" onClick={resetFrom}> Sign up here</Link>
                </div>
                <div>
                    <Link to="/forgot_password" onClick={resetFrom}>Forgot my password</Link>
                </div>
            </form>
        </BaseForm>
    )
}


export default LoginForm;
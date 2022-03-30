import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import {useRef} from "react";
import RegisteredUser from "../../Users/RegisteredUser";
import $ from "jquery";

function LoginForm() {

    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const handleSubmit = ()=>{
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        if (username === "" || password === ""){
            return
        }
        if (RegisteredUser.isSameUser(username, password)){
            console.log("success");
        }
        else{
            $("#wrong-details-text").toggle();
        }
    }

    return (
        <div>
            <UsernameField usernameRef={usernameRef}/>
            <PasswordField passwordRef={passwordRef}/>
            <div id="wrong-details-text" className="mb-3">Incorrect username or password</div>
            <button onClick={handleSubmit}
                    type="button" className="btn btn-primary mb-3">Log in</button>
            <div>
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
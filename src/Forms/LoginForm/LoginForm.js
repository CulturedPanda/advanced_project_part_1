import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsernameField from "./LoginFormComponents/UsernameField";
import PasswordField from "./LoginFormComponents/PasswordField";
import {useRef} from "react";
import RegisteredUser from "../../Users/RegisteredUser";


function LoginForm() {

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = (username, password)=>{
        if (RegisteredUser.isSameUser(username, password)){
            console.log("success");
        }
        else{
            console.log("fail");
        }
    }

    return (
        <div>
            <UsernameField usernameRef={usernameRef}></UsernameField>
            <PasswordField passwordRef={passwordRef}></PasswordField>
            <div>
                New user?
                <Link to="/sign_up"> Sign up here</Link>
            </div>
            <div>
                <Link to="/forgot_password">I forgot my password</Link>
            </div>
            <button onSubmit={handleSubmit(usernameRef.current.value, passwordRef.current.value)}
                    type="submit" className="btn btn-primary">Log in</button>
        </div>
    )
}


export default LoginForm;
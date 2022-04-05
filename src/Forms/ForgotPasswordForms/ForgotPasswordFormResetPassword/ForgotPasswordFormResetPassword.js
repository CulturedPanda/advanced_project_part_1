import PasswordSignupField from "../../SignUpForm/SignUpComponents/PasswordSignupField";
import ForgotPasswordFormResetPasswordText
    from "./ForgotPasswordFormResetPasswordComponents/ForgotPasswordFormResetPasswordText";
import {useState} from "react";
import {useNavigate} from "react-router";
import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery";

function ForgotPasswordFormResetPassword({props}){

    const [passwordConfirm, passwordConfirmSet] = useState(false);
    const [passwordConfirmationConfirm, passwordConfirmationConfirmSet] = useState(false);
    const nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (passwordConfirm && passwordConfirmationConfirm){
            props.setter(true);
            RegisteredUser.updatePassword(props.username, $("#new-pass1").val());
            nav("/");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <ForgotPasswordFormResetPasswordText/>
            <PasswordSignupField props={{setConfirmPass: passwordConfirmSet,
                setConfirmationConfirm: passwordConfirmationConfirmSet, renderRequired: false}}/>
            <div className="col text-center mt-2">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ForgotPasswordFormResetPassword;
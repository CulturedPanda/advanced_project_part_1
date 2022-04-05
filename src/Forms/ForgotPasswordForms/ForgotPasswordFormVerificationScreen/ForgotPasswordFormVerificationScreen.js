import EmailVerificationForm from "../../EmailVerificationForm/EmailVerificationForm";

function ForgotPasswordFormVerificationScreen({props}){
    return (
        <EmailVerificationForm props={{username: props.username, from: "forgot_password"}}/>
    )
}

export default ForgotPasswordFormVerificationScreen;
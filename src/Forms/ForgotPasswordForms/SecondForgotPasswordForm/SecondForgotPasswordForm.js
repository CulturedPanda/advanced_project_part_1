import EmailVerificationForm from "../../EmailVerificationForm/EmailVerificationForm";

function SecondForgotPasswordForm({props}){
    return (
        <EmailVerificationForm props={{username: props.username, from: "forgot_password"}}/>
    )
}

export default SecondForgotPasswordForm;
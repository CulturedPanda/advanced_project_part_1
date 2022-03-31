import WelcomeMessage from "./WelcomeMessage";

function EmailVerificationForm(props){
    return (
        <div>
            <WelcomeMessage props={{from: "forgot_password", username: "Alice"}}></WelcomeMessage>
        </div>
    )
}

export default EmailVerificationForm;
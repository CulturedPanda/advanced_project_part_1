function WelcomeMessage({props}) {
    let start;
    if (props.from === "sign_up") {
        start = <div>
            <h3>
                Thank you for signing up!
            </h3>
            <span>
                To complete your sign up, please verify your email.
            </span>
        </div>
    }
    else if (props.from === "log_in"){
        start = <div>
            <h3>
                Log in from new device detected.
            </h3>
            <span>
                To confirm that it really is you, please
            </span>
        </div>
    }
    else if (props.from === "forgot_password"){
        start = <div>
            <div className="row mb-3">
                <label htmlFor="welc-username" className="col-2 col-form-label">Username:</label>
                <div className="col-8">
                <input type="text" className="form-control" defaultValue={props.username} id="welc-username"></input>
                </div>
            </div>
            <div className="row">
                <label htmlFor="forgot_email" className="col-2 col-form-label d-flex align-items-center">
                    <span className="me-2">Email:</span>
                    <i className="bi bi-question-circle"></i>
                </label>
                <div className="col-8">
                    <input type="email" className="form-control-email" id="forgot_email"
                           aria-describedby="forgot_email_des"></input>
                </div>
            </div>
        </div>
    }
    return(
        <div>
            {start}
        </div>
    )
}

export default WelcomeMessage;
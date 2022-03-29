function UsernameField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" id="Email" className="form-control" aria-describedby="email-help"></input>
            </div>
            <div className="col-auto">
                <span id="email-help" className="form-text">Email must be an email</span>
            </div>
        </div>
    )
}

export default UsernameField;
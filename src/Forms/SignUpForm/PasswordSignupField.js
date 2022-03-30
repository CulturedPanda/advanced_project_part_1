function PasswordSignupField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="username" className="form-label">Password:</label>
                <input type="password" id="username" className="form-control" aria-describedby="email-help"></input>
            </div>
            <div className="col-auto">
                <label htmlFor="username" className="form-label">Repeat Password:</label>
                <input type="password" id="username" className="form-control" aria-describedby="email-help"></input>
            </div>
        </div>
    )
}

export default PasswordSignupField;
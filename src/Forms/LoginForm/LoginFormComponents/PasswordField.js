function PasswordField({passwordRef}){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="pass" className="col-form-label">Password</label>
                <input ref={passwordRef} type="password" id="pass" className="form-control" aria-describedby="email-help"></input>
            </div>
            <div className="col-auto">
                        <span id="email-help" className="form-text">Password must be 8-20 characters long,
                        and contain at-least 1 lower-case letter, 1 capital letter and 1 number</span>
            </div>
        </div>
    )
}

export default PasswordField;
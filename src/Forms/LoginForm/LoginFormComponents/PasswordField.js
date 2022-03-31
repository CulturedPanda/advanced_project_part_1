function PasswordField({passwordRef}){
    return (
        <div>
            <div className="col-auto mb-3">
                <label htmlFor="login-pass" className="col-form-label">Password</label>
                <input ref={passwordRef} type="password" id="login-pass" className="form-control"></input>
            </div>
        </div>
    )
}

export default PasswordField;
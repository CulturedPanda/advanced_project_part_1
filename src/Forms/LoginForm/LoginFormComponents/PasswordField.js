function PasswordField({passwordRef}){
    return (
            <div className="row mb-3">
                <label htmlFor="login-pass" className="col-2 col-form-label me-2">Password:</label>
                <div className="col-8">
                <input ref={passwordRef} type="password" id="login-pass" className="form-control"></input>
                </div>
            </div>
    )
}

export default PasswordField;
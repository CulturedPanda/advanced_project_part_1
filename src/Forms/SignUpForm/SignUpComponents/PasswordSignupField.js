function PasswordSignupField() {
    return (
        <div>
            <div className="row mb-3">
            <label htmlFor="new-pass1" className="col-4 col-form-label">
                Password:
                <span className = "required-field"> *</span>
            </label>
                <div className="col-8">
                    <input type="password" id="new-pass1" className="form-control"></input>
                </div>
            </div>
            <div className="row mb-3">
            <label htmlFor="new-pass2" className="col-4 col-form-label">Confirm Password:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="password" id="new-pass2" className="form-control"></input>
            </div>
            </div>
        </div>
    )
}

export default PasswordSignupField;
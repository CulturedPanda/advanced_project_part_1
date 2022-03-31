function PasswordSignupField() {
    return (
        <div>
            <div className="row mb-3">
            <label htmlFor="new-pass1" className="col-2 col-form-label">Password:</label>
                <div className="col-10">
                    <input type="password" id="new-pass1" className="form-control"></input>
                </div>
            </div>
            <div className="row mb-3">
            <label htmlFor="new-pass2" className="col-3 col-form-label">Repeat Password:</label>
            <div className="col-9">
                <input type="password" id="new-pass2" className="form-control"></input>
            </div>
            </div>
        </div>
    )
}

export default PasswordSignupField;
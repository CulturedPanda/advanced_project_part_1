function EmailField(){
    return (
        <div className="row mb-3">
            <label htmlFor="exampleEmail" className="col-2 col-form-label">
                Email:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-10">
                <input type="email" id="exampleEmail" className="form-control" placeholder="name@example.com" required></input>
            </div>
        </div>
    )
}

export default EmailField;
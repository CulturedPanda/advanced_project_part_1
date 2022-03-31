function UsernameSignupField(){
    return (
        <div className="row mb-3">
            <label htmlFor="username" className="col-2 col-form-label">Username:</label>
            <div className="col-10">
                <input type="email" id="username" className="form-control" placeholder="Example: John Smith"></input>
            </div>
        </div>
    )
}

export default UsernameSignupField;
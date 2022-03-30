function UsernameSignupField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="email" id="username" className="form-control" aria-describedby="email-help" placeholder="Example: John Smith"></input>
            </div>
        </div>
    )
}

export default UsernameSignupField;
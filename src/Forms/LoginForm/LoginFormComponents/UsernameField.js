function UsernameField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" className="form-control" aria-describedby="email-help"></input>
            </div>
        </div>
    )
}

export default UsernameField;
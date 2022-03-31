function UsernameField({usernameRef}) {
    return (
        <div className="col-auto mb-1">
            <label htmlFor="login-username" className="form-label">Username</label>
            <input ref={usernameRef} type="text" id="login-username" className="form-control"></input>
        </div>
    )
}

export default UsernameField;
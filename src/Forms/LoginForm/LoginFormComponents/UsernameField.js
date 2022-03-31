import UsernameEmailRadio from "./UsernameEmailRadio";

function UsernameField({usernameRef, toggleRef}) {
    return (
        <div className="row mb-3">
            <label htmlFor="login-username" className="col-form-label col-2 me-2" id="username-label">Username:</label>
            <div className="col-8">
                <input ref={usernameRef} type="text" id="login-username" className="form-control"/>
            </div>
            <UsernameEmailRadio refTo={toggleRef}/>
        </div>
    )
}

export default UsernameField;
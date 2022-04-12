function ModalUsernameField() {
    return (
        <div className="input-group">
            <span className="input-group-text" id="username-addon"><i className="bi bi-person-plus-fill"/></span>
            <input type="text" placeholder="Contact's username"
                   autoComplete="true" id="modal-field" className="form-control"/>
        </div>
    )
}

export default ModalUsernameField;
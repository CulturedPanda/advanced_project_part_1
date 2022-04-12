function ModalPhoneField() {
    return (
        <div>
            <h5 className="text-danger mb-3">
                Not yet implemented - We did not want to work with even more keys without a database.
            </h5>
        <div className="input-group">
            <span className="input-group-text" id="username-addon"><i className="bi bi-telephone-plus-fill"/></span>
            <input type="tel" placeholder="Contact's phone number"
                   autoComplete="true" id="modal-field" className="form-control"/>
        </div>
        </div>
    )
}

export default ModalPhoneField;
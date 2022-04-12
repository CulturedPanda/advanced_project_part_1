function ModalNicknameField() {
    return (
        <div className="row">
            <h5 className="text-danger mb-3">
                Not yet implemented - requires database
                (AKA backend) to allow for unique nicknames + number identifiers as keys.
            </h5>
            <div className="col-8 me-0 pe-0">
                <div className="input-group">
                    <span className="input-group-text" id="nickname-addon"><i className="bi bi-person-plus-fill"/></span>
                    <input type="text" placeholder="Contact's nickname"
                           autoComplete="true" id="modal-field-nick" className="form-control end-padded"/>
                </div>
            </div>
            <div className="col-4 ps-0">
                <div className="input-group">
                    <span className="input-group-text" id="#-addon">#</span>
                    <input type="text" autoComplete="true" id="modal-field-num" className="form-control col-2"/>
                </div>
            </div>
        </div>
    )
}

export default ModalNicknameField;
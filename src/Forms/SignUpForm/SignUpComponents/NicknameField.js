function NicknameField(){
    return (
        <div className="row mb-3">
            <label htmlFor="nickname" className="col-3 col-form-label">Nick name:</label>
            <div className="col-9">
                <input type="text" id="nickname" className="form-control" placeholder="Example: Mr. Bond007"></input>
            </div>
        </div>
    )
}

export default NicknameField;
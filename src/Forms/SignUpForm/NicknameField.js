function NicknameField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="nickname" className="form-label">Nick name:</label>
                <input type="text" id="nickname" className="form-control" aria-describedby="email-help" placeholder="Example: Mr. Bond007"></input>
            </div>
        </div>
    )
}

export default NicknameField;
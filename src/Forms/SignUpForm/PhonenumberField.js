function PhonenumberField(){
    return (
        <div>
            <div className="row mb-0">
            <label htmlFor="phone" className="col-3 col-form-label">Phone number:</label>
            <div className="col-9">
                <input type="tel" id="phone" className="form-control" placeholder="Example: 05-1234-5678"></input>
            </div>
        </div>
            <div className="row mb-2">
                        <span id="phone" className="form-text">Phone number must include only numbers.</span>
            </div>
        </div>
    )
}

export default PhonenumberField;
function PhonenumberField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="phone" className="form-label">Phone number:</label>
                <input type="tel" id="phone" className="form-control" aria-describedby="phone-help" pattern="[0]{1}[5]{1}-[0-9]{4}-[0-9]{4}" placeholder="Example: 05-1234-5678"></input>
            </div>
            <div className="col-auto">
                        <span id="phone-help" className="form-text">Phone number must include only numbers and consist of 10 digits.</span>
            </div>
        </div>
    )
}

export default PhonenumberField;
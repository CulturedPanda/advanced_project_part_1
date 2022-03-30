
function GenderField() {
    return (
        <div>
            <label htmlFor="gender" className="form-label">Gender:</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1"></label>
                Male;
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       checked></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female;
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                       checked></input>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Other;
                </label>
            </div>
        </div>
    )
}
export default GenderField;
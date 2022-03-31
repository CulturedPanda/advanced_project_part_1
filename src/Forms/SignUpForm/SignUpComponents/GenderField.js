import $ from "jquery";

function GenderField() {

    const hideOtherText = ()=>{
        $("#other-text").hide();
    }

    const showOtherText = ()=>{
        $("#other-text").show();
    }

    return (
        <div>
            <label htmlFor="gender" className="col-2 col-form-label">Gender:</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={hideOtherText}></input>
                <label className="form-check-label" htmlFor="flexRadioDefault1"></label>
                Male
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                       onChange={hideOtherText}></input>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                       defaultChecked onChange={showOtherText}></input>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Other
                </label>
            </div>
            <div className="form-text form-text-inline" id="other-text">
                <input className="form-text" type="text"></input>
            </div>
        </div>
    )
}
export default GenderField;
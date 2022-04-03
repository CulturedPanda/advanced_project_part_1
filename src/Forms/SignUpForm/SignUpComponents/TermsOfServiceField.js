
function TermOfServiceField() {
    return (
    <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1"></label>
        <span>
            I have read and accepted the
            <a href=""> terms of service</a>
        </span>
    </div>
)
}

export default TermOfServiceField;
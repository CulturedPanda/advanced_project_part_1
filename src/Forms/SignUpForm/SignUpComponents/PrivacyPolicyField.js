function PrivacyPolicyField() {
    return (
/*        <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label className="form-check-label" htmlFor="flexRadioDefault1"></label>
            <span>I have read and accepted the
                <a href="privacy_policy"> privacy policy</a>
            </span>
        </div>*/
        <div className="form-check row mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                <label className="form-check-label" htmlFor="invalidCheck">
                    I have read and accepted the
                    <a href=""> privacy policy</a>
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyField;
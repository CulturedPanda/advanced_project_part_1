function PrivacyPolicyField() {
    return (
        <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label className="form-check-label" htmlFor="flexRadioDefault1"></label>
            <span>I have read and accepted the
                <a href="privacy_policy"> privacy policy</a>
            </span>
        </div>
    )
}

export default PrivacyPolicyField;
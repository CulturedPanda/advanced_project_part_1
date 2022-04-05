import pdf from "../../../Policies/privacy_policy.pdf"

function PrivacyPolicyField() {
    return (
        <div className="form-check row mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="privacy-policy-radio-check" required></input>
                <label className="form-check-label" htmlFor="privacy-policy-radio-check">
                    I have read and accepted the
                    <a target="_blank" href={pdf}> privacy policy</a>
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyField;
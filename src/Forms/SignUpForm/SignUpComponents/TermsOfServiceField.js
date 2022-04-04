import {Link} from "react-router-dom";

function TermOfServiceField() {
    return (
        <div className="form-check row mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label className="form-check-label" htmlFor="invalidCheck">
                    I have read and accepted the
                    <Link to="terms_of_service"> terms of service</Link>
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
)
}

export default TermOfServiceField;
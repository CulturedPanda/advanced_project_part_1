import {Link} from "react-router-dom";
import pdf from "../../../Policies/tos.pdf";

function TermOfServiceField() {
    return (
        <div className="form-check row mb-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="tos-radio-check" required/>
                <label className="form-check-label" htmlFor="tos-radio-check">
                    I have read and accepted the
                    <a target="_blank" href={pdf}> terms of service</a>
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
)
}

export default TermOfServiceField;
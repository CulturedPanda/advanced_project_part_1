import {useRef} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery";


function UsernameSignupField(){


    return (
        <div className="row mb-3">
            <label htmlFor="username" className="col-4 col-form-label">Username:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="text" id="username" className="form-control" placeholder="Example: John Smith" required></input>
            </div>
        </div>
    )
}

export default UsernameSignupField;
import {useRef} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery";


function UsernameSignupField(props, setFieldsData){
    const username = props.username;

    console.log(setFieldsData);

    function handleChange(event) {
        setFieldsData({username: event.target.value});
    }

    return (
        <div className="row mb-3">
            <label htmlFor="username" className="col-4 col-form-label">Username:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="text" id="username" className="form-control" placeholder="Example: John Smith" value={username} onChange={handleChange} required />
            </div>
        </div>
    )
}

export default UsernameSignupField;
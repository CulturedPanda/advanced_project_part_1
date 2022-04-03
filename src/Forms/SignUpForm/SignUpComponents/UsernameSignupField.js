import {useRef} from "react";
import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery";


function UsernameSignupField(){

    let username = useRef("");
    const onBlur = ()=>{
        if(RegisteredUser.DoesUserExist(useRef.current.value)){
            let checkUsername = $("#username");
            checkUsername.addClass("border-danger")
        }
    }
    return (
        <div className="row mb-3">
            <label htmlFor="username" className="col-2 col-form-label">Username:</label>
            <div className="col-10">
                <input type="text" id="username" className="form-control" placeholder="Example: John Smith"></input>
            </div>
        </div>
    )
}

export default UsernameSignupField;
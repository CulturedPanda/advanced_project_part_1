import {useRef} from "react";

import $ from "jquery";
import ShowPasswordButton from "../../LoginForm/LoginFormComponents/ShowPasswordButton";

function PasswordSignupField({props}) {

    const pass = useRef("");
    const passConfirm = useRef("");

    const handleBlur = ()=>{
        const currentVal = pass.current.value;
        const len = currentVal.length;
        let passField = $("#new-pass1");
        let error = $("#main-pass-error")
        if (!currentVal.match("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$")){
            passField.removeClass("border-success");
            passField.addClass("border-danger");
            error.text("Error: Password must contain 1 capital letter, 1 lowercase letter, 1 number and 1 special character");
            error.show();
            props.setConfirmPass(false);
        }
        else if(len > 20 || len < 8){
            passField.removeClass("border-success");
            passField.addClass("border-danger");
            error.text("Error: Password must be between 8 to 20 characters long");
            error.show();
            props.setConfirmPass(false);
        }
        else{
            passField.removeClass("border-danger");
            passField.addClass("border-success");
            error.hide();
            props.setConfirmPass(true);
        }
    }

    const handleChange = ()=>{
        let confirmField = $("#new-pass2");
        let currentConfirm = passConfirm.current.value;
        let currentPass = pass.current.value;
        if (currentConfirm === ""){
            return;
        }
        if (currentPass !== currentConfirm){
            confirmField.removeClass("border-success");
            confirmField.addClass("border-danger");
            props.setConfirmationConfirm(false);
        }
        else{
            confirmField.removeClass("border-danger");
            confirmField.addClass("border-success");
            props.setConfirmationConfirm(true);
        }
    }

    return (
        <div>
            <div className="row mb-3">
            <label htmlFor="new-pass1" className="col-4 col-form-label">
                Password:
                <span className = "required-field"> *</span>
            </label>
                <div className="col-8">
                    <input onBlur={handleBlur} onChange={handleChange} type="password" ref={pass} id="new-pass1" className="form-control"/>
                    <ShowPasswordButton props={{passField: "new-pass1"}}/>
                    <div className="error-text" id="main-pass-error"/>
                </div>
            </div>
            <div className="row mb-3">
            <label htmlFor="new-pass2" className="col-4 col-form-label">Confirm Password:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input ref={passConfirm} onChange={handleChange} type="password" id="new-pass2" className="form-control"/>
                <ShowPasswordButton props={{passField: "new-pass2"}}/>
            </div>
            </div>
        </div>
    )
}

export default PasswordSignupField;
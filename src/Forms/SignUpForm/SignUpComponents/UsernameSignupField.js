import RegisteredUser from "../../../Users/RegisteredUser";
import $ from "jquery";
import PendingUser from "../../../Users/PendingUser";


function UsernameSignupField({props}){

    const handleBlur = ()=>{
        let usernameField = $("#username-signup-field");
        let text = $("#username-error");
        if (usernameField.val() === "" || !usernameField.val().match("^[\\w\\s]{1,50}$")){
            usernameField.removeClass("border-success");
            usernameField.addClass("border-danger");
            text.text("Error: Username must be between 1-50 characters and must not contain any special characters")
            text.show();
            props.setConfirm(false);
        }
        else if (RegisteredUser.DoesUserExist(usernameField.val()) || PendingUser.doesUserExist(usernameField.val())){
            usernameField.removeClass("border-success");
            usernameField.addClass("border-danger");
            text.text("Error: Username already exists")
            text.show();
            props.setConfirm(false);
        }
        else{
            usernameField.removeClass("border-danger");
            usernameField.addClass("border-success");
            text.hide();
            props.setConfirm(true);
        }
    }

    return (
        <div className="row mb-3">
            <label htmlFor="signup-username" className="col-4 col-form-label">Username:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="text" onBlur={handleBlur} id="username-signup-field" className="form-control" placeholder="Example: John Smith" required />
                <div className="error-text" id="username-error"/>
            </div>
        </div>
    )
}

export default UsernameSignupField;
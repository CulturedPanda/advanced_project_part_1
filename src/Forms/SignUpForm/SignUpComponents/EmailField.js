import $ from "jquery";
import RegisteredUser from "../../../Users/RegisteredUser";
import PendingUser from "../../../Users/PendingUser";

function EmailField({props}){

    const handleBlur = ()=>{
        let emailField = $("#email-signup-field");
        let current = emailField.val();
        let text = $("#email-error");
        if (RegisteredUser.DoesUserExist(current) || PendingUser.doesUserExist(current)){
            emailField.removeClass("border-success");
            emailField.addClass("border-danger");
            text.text("Error: Email already exists")
            text.show();
            props.setConfirm(false);
        }
        else if(current.length < 3 || !current.includes("@")){
            emailField.removeClass("border-success");
            emailField.addClass("border-danger");
            text.text("Error: Invalid email address");
            text.show();
            props.setConfirm(false);
        }
        else{
            emailField.removeClass("border-danger");
            emailField.addClass("border-success");
            text.hide();
            props.setConfirm(true);
        }
    }
    return (
        <div className="row mb-3">
            <label htmlFor="email-signup-field" className="col-2 col-form-label">
                Email:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-10">
                <input type="email" onBlur={handleBlur}
                       id="email-signup-field" className="form-control" placeholder="name@example.com" required/>
                <div className="error-text" id="email-error"/>
            </div>
        </div>
    )
}

export default EmailField;
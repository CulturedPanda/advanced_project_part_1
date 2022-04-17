import $ from "jquery";

function NicknameField({props}){

    const handleBlur = ()=>{
        let text = $("#nickname-error");
        let nicknameField = $("#nickname-signup-field");
        if (nicknameField.val() === "" || !nicknameField.val().match("^[\\w\\s]{1,100}$")){
            nicknameField.removeClass("border-success");
            nicknameField.addClass("border-danger");
            text.text("Error: Nickname must be between 1-100 characters and can not contain any special characters")
            text.show();
            props.setConfirm(false);
        }
        else{
            nicknameField.removeClass("border-danger");
            nicknameField.addClass("border-success");
            text.hide();
            props.setConfirm(true);
        }
    }

    return (
        <div className="row mb-3">
            <label htmlFor="nickname" className="col-3 col-form-label">Nick name:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-9">
                <input type="text" onBlur={handleBlur} id="nickname-signup-field" className="form-control" placeholder="Example: Mr. Bond007"/>
                <div className="error-text" id="nickname-error"/>
            </div>
        </div>
    )
}

export default NicknameField;
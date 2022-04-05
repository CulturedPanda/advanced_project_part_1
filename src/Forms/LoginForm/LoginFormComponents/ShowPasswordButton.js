import $ from "jquery"

function ShowPasswordButton({props}){

    const showPassword = ()=>{
        let passField = $("#" + props.passField);
        if ($("#" + props.id).is(":checked")){
            passField.get(0).type = "text";
        }
        else{
            passField.get(0).type = "password";
        }
    }

    return(
        <div>
            <input onChange={showPassword} className="form-check-input me-1" type="checkbox" value="" id={props.id}/>
            <label htmlFor="show-password-toggle" className="form-check-label small-text">Show</label>
        </div>
    )
}

export default ShowPasswordButton;
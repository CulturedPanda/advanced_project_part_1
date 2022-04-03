import UsernameEmailRadio from "./UsernameEmailRadio";

function UsernameField({props}) {

    let text = ()=>{
        if (props.usernameDefault){
            return "Username:";
        }
        else{
            return "Email:";
        }
    }

    return (
        <div className="row mb-3">
            <label htmlFor="login-username" className="col-form-label col-2 me-2" id="username-label">{text()}</label>
            <div className="col-8">
                <input name="username" ref={props.usernameRef}
                       defaultValue={props.current} type="text" id="login-username" className="form-control"/>
            </div>
            <UsernameEmailRadio props={{toggleRef: props.toggleRef, usernameDefault: props.usernameDefault}}/>
        </div>
    )
}

export default UsernameField;
import $ from "jquery"

function UsernameEmailRadio({props}) {

    const onChange = (event, text)=>{
        $("#username-label").text(text);
    }

    return (
        <div>
            <div className="form-check form-check-inline">
                <input ref={props.toggleRef} className="form-check-input-sm" type="radio" name="inlineRadioOptions" id="username-radio"
                       value="1" onChange={event => onChange(event, "Username:")} defaultChecked={props.usernameDefault}/>
                <label className="form-check-label" htmlFor="username-radio">Username</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input-sm" type="radio" name="inlineRadioOptions" id="email-radio"
                       value="2" onChange={event => onChange(event,"Email:")} defaultChecked={!props.usernameDefault}/>
                <label className="form-check-label" htmlFor="email-radio">Email</label>
            </div>
        </div>
    )
}

export default UsernameEmailRadio;
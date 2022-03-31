import $ from "jquery"

function UsernameEmailRadio({refTo}) {

    const onChange = (event, text)=>{
        $("#username-label").text(text);
    }

    return (
        <div>
            <div className="form-check form-check-inline">
                <input ref={refTo} className="form-check-input-sm" type="radio" name="inlineRadioOptions" id="username-radio"
                       value="1" onChange={event => onChange(event, "Username:")} defaultChecked/>
                <label className="form-check-label" htmlFor="inlineRadio1">Username</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input-sm" type="radio" name="inlineRadioOptions" id="email-radio"
                       value="2" onChange={event => onChange(event,"Email:")}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Email</label>
            </div>
        </div>
    )
}

export default UsernameEmailRadio;
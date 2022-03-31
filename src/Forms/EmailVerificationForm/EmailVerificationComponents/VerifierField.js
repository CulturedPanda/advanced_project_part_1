import $ from "jquery";

function VerifierField({textRef}){

    const verifyCodeStructure = ()=>{
        let userInput = textRef.current.value;
        let field = $("#verification-code-input");
        let text = $("#format-error");
        if (userInput.length > 6 || !userInput.match("^[0-9a-zA-Z]*$")){
            field.addClass("border-danger");
            text.show();
        }
        else{
            field.removeClass("border-danger");
            text.hide();
        }
    }

    return (
        <div className="row">
            <label htmlFor="verification-code-input" className="col-form-label col-4">Verification code:</label>
            <div className="col-6">
                <input ref={textRef} type="text" name="verification-code" className="form-control"
                       id="verification-code-input" pattern="^(?!.*  )(?=.*[\w-])[\w -]{6}$"
                       onKeyUp={verifyCodeStructure}/>
                    <span id="format-error" className="error-text">Verification code must be
                        6 digits long and only contain letters and numbers</span>
                    <span id="verification-error" className="error-text">Error - incorrect code</span>
            </div>
        </div>
    )
}

export default VerifierField;
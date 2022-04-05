import $ from "jquery";

function SecretQuestionAnswerField({props}){
    const handleBlur = ()=>{
        let secretAnswerField = $("#secret-answer");
        let text = $("#secret-answer-error");
        if (secretAnswerField.val() === ""){
            secretAnswerField.removeClass("border-success");
            secretAnswerField.addClass("border-danger");
            text.text("Error: field can not be empty")
            text.show();
            props.setConfirm(false);
        }
        else{
            secretAnswerField.removeClass("border-danger");
            secretAnswerField.addClass("border-success");
            text.hide();
            props.setConfirm(true);
        }
    }

    return(
        <div className="row mb-3">
            <label htmlFor="secret-answer" className="col-2 me-2 col-form-label">Answer:
                {props.renderRequired && <span className = "required-field"> *</span>}
            </label>
            <div className="col-8">
                <input type="text" id="secret-answer" className="form-control" onBlur={handleBlur} required/>
                <div className="error-text" id="secret-answer-error"/>
            </div>
        </div>
    )
}

export default SecretQuestionAnswerField;
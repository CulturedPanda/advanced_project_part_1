import $ from "jquery";

function SecretQuestionFieldAnswerField(){
    const handleBlur = ()=>{
        let secretAnswerField = $("#secret-answer");
        let text = $("#secret-answer-error");
        if (secretAnswerField.val() === ""){
            secretAnswerField.removeClass("border-success");
            secretAnswerField.addClass("border-danger");
            text.text("Error: field can not be empty")
            text.show();
        }
        else{
            secretAnswerField.removeClass("border-danger");
            secretAnswerField.addClass("border-success");
            text.hide();
        }
    }

    return(
        <div className="row mb-3">
            <label htmlFor="secret-answer" className="col-2 me-2 col-form-label">Answer:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="text" id="secret-answer" className="form-control" onBlur={handleBlur} required/>
                <div className="error-text" id="secret-answer-error"/>
            </div>
        </div>
    )
}

export default SecretQuestionFieldAnswerField;
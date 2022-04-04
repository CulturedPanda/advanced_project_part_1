function SecretQuestionFieldAnswerField(){
    return(
        <div className="row mb-3">
            <label htmlFor="secret-answer" className="col-2 me-2 col-form-label">Answer:
                <span className = "required-field"> *</span>
            </label>
            <div className="col-8">
                <input type="text" id="secret-answer" className="form-control"/>
            </div>
        </div>
    )
}

export default SecretQuestionFieldAnswerField;
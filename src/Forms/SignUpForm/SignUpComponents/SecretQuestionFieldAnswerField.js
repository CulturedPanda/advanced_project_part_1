function SecretQuestionFieldAnswerField({props}){
    return(
        <div className="row mb-3">
            <label htmlFor="secretAnswer" className="col-2 me-2 col-form-label">Answer:</label>
            <div className="col-8">
                <input ref={props.answerRef} type="text" id="secretAnswer" className="form-control"/>
            </div>
        </div>
    )
}

export default SecretQuestionFieldAnswerField;
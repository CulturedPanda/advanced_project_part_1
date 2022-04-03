function SecretQuestionFieldAnswerField({props}){
    return(
        <div className="row mb-3">
            <label htmlFor="secretAnswer" className="col-3 col-form-label">Secret answer:</label>
            <div className="col-9">
                <input type="text" id="secretAnswer" className="form-control"></input>
            </div>
        </div>
    )
}

export default SecretQuestionFieldAnswerField;
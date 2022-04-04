function SecretQuestionsField({props}) {
    return (
        <div className="row mb-3">
            <label htmlFor="exampleEmail" className="col-4 col-form-label">
                Security question:
                <span className = "required-field"> *</span>
            </label>
                <div className="col-auto">
                    <select className="form-select" id="secret-questions">
                        <option defaultValue>Choose security question</option>
                        <option value="1">What was your elementary's school name?</option>
                        <option value="2">What is / was your dog's name?</option>
                        <option value="3">What is your favorite sport?</option>
                        <option value="4">In what city did you grow up in?</option>
                        <option value="5">What was your nick-name as a child?</option>
                        <option value="6">What was your favorite teacher's name?</option>
                    </select>
                </div>
            {props.children}
        </div>
    )
}

export default SecretQuestionsField;
function SecretQuestionsField({props}) {
    return (
            <div className="row mb-1">
                <div>
                    <label htmlFor="secret-question" id="secret-questions" className="col-4 col-form-label">Secret
                        Question:</label>
                    <select ref={props.questionRef} className="col-8" aria-label="Default select example" id="secret-questions">
                        <option value="1">What your elementary's school name?</option>
                        <option value="2">What is your dog's name?</option>
                        <option value="3">What is your favorite sport?</option>
                        <option value="4">In what city you grew up in?</option>
                        <option value="5">What was your nick-name as a child?</option>
                        <option value="6">What was your favorite teacher's name?</option>
                    </select>
                </div>
            </div>
    )
}

export default SecretQuestionsField;
function SecretQuestionsField() {
    return (
        <div>
            <div className="row mb-1">
                <div>
                    <label htmlFor="secret-question" id="secret-questions" className="col-4 col-form-label">Secret
                        Question:</label>
                    <select className="col-8" aria-label="Default select example" id="secret-questions">
                        <option value="1">What your elementary's school name?</option>
                        <option value="2">What is your dog's name?</option>
                        <option value="3">What is your favorite sport?</option>
                        <option value="4">In what city you grew up in?</option>
                        <option value="5">What was your nick-name as a child?</option>
                        <option value="6">What was your favorite teacher's name?</option>
                    </select>
                </div>
                <div className="col-auto">
                    <span id="secret-questions" className="form-text"> Secret question will be asked if the user forgot his password or username.</span>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="secretAnswer" className="col-3 col-form-label">Secret answer:</label>
                <div className="col-9">
                    <input type="text" id="secretAnswer" className="form-control"></input>
                </div>
            </div>
        </div>
    )
}

export default SecretQuestionsField;
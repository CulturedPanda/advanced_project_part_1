function EmailField(){
    return (
        <div>
            <EmailField></EmailField>
            <div className="col-auto">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" className="form-control" aria-describedby="email-help"></input>
            </div>
        </div>
    )
}

export default EmailField;
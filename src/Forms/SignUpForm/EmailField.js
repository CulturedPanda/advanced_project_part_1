function EmailField(){
    return (
        <div>
            <div className="col-auto">
                <label htmlFor="username" className="form-label">Email:</label>
                <input type="email" id="username" className="form-control" aria-describedby="email-help" placeholder="name@example.com"></input>
            </div>
        </div>
    )
}

export default EmailField;
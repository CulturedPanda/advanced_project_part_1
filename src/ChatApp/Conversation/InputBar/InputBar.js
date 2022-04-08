function InputBar() {
    return (
        <div className="row col-9 mb-3 ">
            <div className="input-group mb-3">
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-paperclip"></i>
                </button>
                <input type="text" className="form-control" placeholder="New message here..." aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
                <button type="button" className="btn btn-primary">Send</button>
            </div>
        </div>
    )
}

export default InputBar;
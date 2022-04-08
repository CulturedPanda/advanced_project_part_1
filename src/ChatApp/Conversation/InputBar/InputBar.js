function InputBar() {
    return (
        <div className="row">
            <div className="input-group mb-3">
                <button type="button" className="btn btn-primary">Send</button>
                <input type="text" className="form-control col-5" placeholder="" aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
                <button type="button" className="btn btn-primary">Send</button>
            </div>
        </div>
    )
}

export default InputBar;
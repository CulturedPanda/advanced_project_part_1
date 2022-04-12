function AddContactButton({props}){
    return(
        <button type="button" className="btn no-effect-button btn-lg pe-0"
                data-bs-toggle="tooltip modal" data-bs-target="#example-modal" data-bs-placement="bottom" title="Add contact">
            <i className="bi bi-person-plus float-end"/>
        </button>
    )
}

export default AddContactButton;
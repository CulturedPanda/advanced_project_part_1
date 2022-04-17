function BaseForm({children}) {


    return (
        // Keeping this temporarily as get method. Need to work with this in mind.
        /* TODO : Change to post when we have a server */
        <div className="row align-items-center vw-100 vh-100">
            <div className="row col-md-4 col-sm-12 col-xs-12 border
             border-primary border-3 rounded-3 bg-light" id="base-form">
                {children}
            </div>
        </div>
    );
}

export default BaseForm;
function SearchBar({props}){
    return(
        <div className="row">
            {/*<div className="col-1">*/}
            {/*<label htmlFor="contact-search-bar" className="col-form-label"><i className="bi bi-search"/></label>*/}
            {/*</div>*/}
            <div>
                <i className="bi bi-search"/>
            <input type="search" placeholder="Search contacts..." className="form-control col-10 nosubmit" id="contact-search-bar"/>
            </div>
        </div>
    )
}

export default SearchBar;
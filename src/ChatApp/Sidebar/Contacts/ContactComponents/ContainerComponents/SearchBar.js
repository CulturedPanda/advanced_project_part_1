import {useRef} from "react";

function SearchBar({props}) {

    const val = useRef();

    return (
        <div className="input-group pe-0 ps-0">
            <i className="bi bi-search input-group-text"/>
            <input ref={val} onChange={()=>props.update(val.current.value)} type="search"
                   className="form-control" placeholder="Search contacts"/>
        </div>
    )
}

export default SearchBar;
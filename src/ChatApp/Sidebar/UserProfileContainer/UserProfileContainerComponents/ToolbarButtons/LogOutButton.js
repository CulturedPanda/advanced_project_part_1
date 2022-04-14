import CookieHandling from "../../../../../Misc/CookieHandling";
import {useNavigate} from "react-router";

function LogOutButton({props}){

    const nav = useNavigate();

    const clickHandler = ()=>{
        CookieHandling.deleteCookie("username");
        CookieHandling.deleteCookie("password");
        props.setLogIn(false);
        nav('/log_in')
    }

    return(
        <button onClick={clickHandler} type="button" className="btn no-effect-button btn-lg pe-0"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log out">
            <i className="bi bi-box-arrow-right float-end"/>
        </button>
    )
}

export default LogOutButton;
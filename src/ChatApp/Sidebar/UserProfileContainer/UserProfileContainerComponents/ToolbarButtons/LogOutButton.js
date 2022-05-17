import CookieHandling from "../../../../../Misc/CookieHandling";
import {useNavigate} from "react-router";

/**
 * A button for logging out the user.
 * @param props
 * @returns {JSX.Element}
 */
function LogOutButton({props}) {

    const nav = useNavigate();

    /**
     * Deletes the cookies related to the user and logs them out.
     */
    const clickHandler = () => {
        props.setLogIn(false);
        nav('/log_in')
    }

    return (
        <button onClick={clickHandler} type="button" className="btn no-effect-button btn-lg pe-0"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log out">
            <i className="bi bi-box-arrow-right float-end"/>
        </button>
    )
}

export default LogOutButton;
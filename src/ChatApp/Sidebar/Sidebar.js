import {Component} from "react";
import UserContainer from "./UserContainer/UserContainer";
import Contacts from "./Contacts/Contacts";

class Sidebar extends Component{

    render() {
        return(
            <div className="col-3 ms-5">
                <UserContainer/>
                <Contacts/>
            </div>
        )
    }
}

export default Sidebar;
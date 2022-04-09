import {Component} from "react";
import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import Contacts from "./Contacts/Contacts";

class Sidebar extends Component{

    render() {
        return(
            <div className="col-3 ms-5">
                <UserProfileContainer username="Panda" setLogIn={this.props.setLogIn}/>
                <Contacts username="Panda"/>
            </div>
        )
    }
}

export default Sidebar;
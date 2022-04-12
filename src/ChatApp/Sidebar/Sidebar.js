import {Component} from "react";
import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import Contacts from "./Contacts/Contacts";

class Sidebar extends Component{

    constructor(props) {
        super(props);
        this.state = {shouldUpdate: false};
    }

    setShouldUpdate = (val)=>{
        this.setState({
            shouldUpdate: val
        })
    }


    render() {
        return(
            <div className="col-3 ms-5 mh-75" id="sidebar-div">
                <UserProfileContainer username="Panda" setLogIn={this.props.setLogIn} renderButtons={true}
                                      renderNum={true} setUpdate={this.setShouldUpdate}/>
                <Contacts username="Panda" shouldUpdate={this.state.shouldUpdate}/>
            </div>
        )
    }
}

export default Sidebar;
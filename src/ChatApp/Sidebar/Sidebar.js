import {Component} from "react";
import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import Contacts from "./Contacts/Contacts";
import RegisteredUser from "../../Users/RegisteredUser";

class Sidebar extends Component{

    constructor(props) {
        super(props);
        let contactsTemp = RegisteredUser.getContacts(this.props.username);
        this.state = {
            contacts: contactsTemp,
            filteredContacts: contactsTemp};
    }

    filterContacts = (val)=>{
        let contacts = this.state.contacts;
        this.setState({
            filteredContacts: contacts.filter(
                element => RegisteredUser.getNickname(element).toLowerCase().includes(val.toLowerCase()))
        });
    }

    updateContacts = ()=>{
        let contactsTemp = RegisteredUser.getContacts(this.props.username);
        let newContact = contactsTemp.filter(x => !this.state.contacts.includes(x));
        if (newContact[0]) {
            this.setState({
                contacts: this.state.contacts.concat(newContact[0]),
                filteredContacts: this.state.contacts.concat(newContact[0]),
                shouldUpdate: false
            }, () => {
                console.log(this.state.contacts)
            })
        }
    }



    render() {
        return(
            <div className="col-3 ms-5 mh-75 pe-0" id="sidebar-div">
                <UserProfileContainer username={this.props.username} setLogIn={this.props.setLogIn} renderButtons={true}
                                      renderNum={true} updateContacts={this.updateContacts}/>
                <Contacts username="Panda" shouldUpdate={this.state.shouldUpdate}
                          contacts={this.state.contacts} filteredContacts={this.state.filteredContacts}
                          filterContacts={this.filterContacts} setConvo={this.props.setConvo}/>
            </div>
        )
    }
}

export default Sidebar;
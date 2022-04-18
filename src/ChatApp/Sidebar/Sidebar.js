import {Component} from "react";
import UserProfileContainer from "./UserProfileContainer/UserProfileContainer";
import Contacts from "./Contacts/Contacts";
import RegisteredUser from "../../Users/RegisteredUser";

/**
 * The sidebar of the main app.
 */
class Sidebar extends Component {

    constructor(props) {
        super(props);
        let contactsTemp = RegisteredUser.getContacts(this.props.username);
        this.state = {
            contacts: contactsTemp,
            filteredContacts: contactsTemp,
            nickname: RegisteredUser.getNickname(this.props.username)
        };
    }

    /**
     * Updates the user's nickname.
     */
    updateNickname = () => {
        this.setState({
            nickname: RegisteredUser.getNickname(this.props.username)
        });
    }

    /**
     * Filters the contacts upon search.
     * @param val the value to filter by.
     */
    filterContacts = (val) => {
        let contacts = this.state.contacts;
        this.setState({
            filteredContacts: contacts.filter(
                element => RegisteredUser.getNickname(element).toLowerCase().includes(val.toLowerCase()))
        });
    }

    /**
     * Updates the user's contacts upon adding a contact.
     */
    updateContacts = () => {
        let contactsTemp = RegisteredUser.getContacts(this.props.username);
        let newContact = contactsTemp.filter(x => !this.state.contacts.includes(x));
        if (newContact[0]) {
            this.setState({
                contacts: this.state.contacts.concat(newContact[0]),
                filteredContacts: this.state.contacts.concat(newContact[0]),
                shouldUpdate: false
            })
        }
    }


    render() {
        return (
            <div className="col-3 ms-5 mh-75 pe-0" id="sidebar-div">
                <UserProfileContainer username={this.props.username} setLogIn={this.props.setLogIn} renderButtons={true}
                                      renderNum={true} updateContacts={this.updateContacts}
                                      updateNickname={this.updateNickname} nickname={this.state.nickname}/>
                <Contacts username={this.props.username} shouldUpdate={this.state.shouldUpdate}
                          contacts={this.state.contacts} filteredContacts={this.state.filteredContacts}
                          filterContacts={this.filterContacts} setConvo={this.props.setConvo}/>
            </div>
        )
    }
}

export default Sidebar;
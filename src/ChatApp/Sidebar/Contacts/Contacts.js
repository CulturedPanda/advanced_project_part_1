import {Component} from "react";
import ContactContainer from "./ContactComponents/ContactContainer";
import RegisteredUser from "../../../Users/RegisteredUser";
import SearchBar from "./ContactComponents/ContainerComponents/SearchBar";

class Contacts extends Component {

    constructor(props) {
        super(props);
        let contactsTemp = RegisteredUser.getContacts(this.props.username);
        this.state = {
            contacts: contactsTemp,
            filteredContacts: contactsTemp
        }
    }

    createContacts() {
        return this.state.contacts.map((contact) =>
            <ContactContainer username={contact} key={contact}/>)
    }

    render() {
        return (
            <>
                <SearchBar/>
                <div className="vh-100 bg-light overflow-auto list-group btn-group">
                    {this.createContacts()}
                </div>
            </>
        )
    }
}

export default Contacts;
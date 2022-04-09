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

    filterContacts = (val)=>{
        let contacts = this.state.contacts;
        this.setState({
            filteredContacts: contacts.filter(element => element.toLowerCase().includes(val.toLowerCase()))
        });
    }

    createContacts() {
        return this.state.filteredContacts.map((contact) =>
            <ContactContainer username={contact} key={contact}/>)
    }

    render() {
        return (
            <div>
                <SearchBar props={{update: this.filterContacts}}/>
                <div className="bg-light overflow-auto list-group btn-group overflow-case">
                    {this.createContacts()}
                </div>
            </div>
        )
    }
}

export default Contacts;
import {Component} from "react";
import ContactContainer from "./ContactComponents/ContactContainer";
import RegisteredUser from "../../../Users/RegisteredUser";
import SearchBar from "./ContactComponents/ContainerComponents/SearchBar";

class Contacts extends Component {


    createContacts = ()=> {
        return this.props.filteredContacts.map((contact) =>
            <ContactContainer username={contact} user={this.props.username} setConvo={this.props.setConvo} key={contact}/>)
    }

    render() {
        return (
            <div className="row border-end border-dark border-1">
                <SearchBar props={{update: this.props.filterContacts}}/>
                <div className="bg-light overflow-auto list-group btn-group overflow-case">
                    {this.createContacts()}
                </div>
            </div>
        )
    }
}

export default Contacts;
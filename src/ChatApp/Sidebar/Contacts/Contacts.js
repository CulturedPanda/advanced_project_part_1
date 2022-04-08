import {Component} from "react";
import ContactContainer from "./ContactComponents/ContactContainer";
import RegisteredUser from "../../../Users/RegisteredUser";

class Contacts extends Component{

    createContacts(){
        let contacts = RegisteredUser.getContacts(this.props.username);
         return contacts.map((contact) =>
             <ContactContainer username={contact} key={contact}/>)
    }
    render() {
        return (
            <div className="vh-100 bg-light list-group">
                {this.createContacts()}
            </div>
        )
    }
}

export default Contacts;
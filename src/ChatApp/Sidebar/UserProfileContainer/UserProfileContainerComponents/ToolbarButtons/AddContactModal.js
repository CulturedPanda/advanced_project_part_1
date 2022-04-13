import {Component} from "react";
import EmailField from "../../../../../Forms/SignUpForm/SignUpComponents/EmailField";
import ModalSelectionButtons from "./ModalComponents/ModalSelectionButtons";
import {Modal, Button} from "react-bootstrap";
import ModalEmailField from "./ModalComponents/ModalEmailField";
import ModalUsernameField from "./ModalComponents/ModalUsernameField";
import ModalNicknameField from "./ModalComponents/ModalNicknameField";
import ModalPhoneField from "./ModalComponents/ModalPhoneField";
import RegisteredUser from "../../../../../Users/RegisteredUser";
import $ from "jquery";


class AddContactModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: "username"
        };
    }

    renderField = ()=>{
        if (this.state.radioValue === "nickname"){
            return(<ModalNicknameField/>)
        }
        else if (this.state.radioValue === "username"){
            return(<ModalUsernameField/>)
        }
        else if (this.state.radioValue === "email"){
            return(<ModalEmailField/>)
        }
        else{
            return(<ModalPhoneField/>)
        }
    }

    setRadioVal = (val)=>{
        this.setState({
            radioValue: val
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if (this.state.radioValue === "username" || this.state.radioValue === "username"){
            let val = $("#modal-field").val()
            if (RegisteredUser.DoesUserExist(val)){
                RegisteredUser.addContact(this.props.username, val);
                this.props.updateContacts();
                this.props.setShow(false);
            }
        }
    }



    render() {
        return (
            <Modal
                show={this.props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={()=>{this.props.setShow(false)}}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form>
                            <div>
                                <ModalSelectionButtons props={{set: this.setRadioVal}}/>
                                <div className="m-5">
                                    {this.renderField()}
                                </div>
                            </div>
                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" onClick={()=>this.props.setShow(false)}>Close</Button>
                    <Button onClick={this.handleSubmit}>Add contact</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AddContactModal;
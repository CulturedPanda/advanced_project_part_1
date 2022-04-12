import {Component} from "react";
import EmailField from "../../../../../Forms/SignUpForm/SignUpComponents/EmailField";
import ModalSelectionButtons from "./ModalComponents/ModalSelectionButtons";
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
                this.props.setUpdate(true);
            }
        }
    }



    render() {
        return (
            <div className="modal centered fade" id="add-contact-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div>
                                    <ModalSelectionButtons props={{set: this.setRadioVal}}/>
                                    <div className="m-5">
                                        {this.renderField()}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContactModal;
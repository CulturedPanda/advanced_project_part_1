import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import $ from "jquery";
import RegisteredUser from "../../../../../../Users/RegisteredUser";

class ChangeDescriptionModal extends Component{

    handleClose = (e)=>{
        e.stopPropagation();
        this.props.hide(false);
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        let val = $("#new-desc-input").val();
        let errText = $("#desc-choose-error");
        if (val.match("^[\\w\\s]{1,100}$")){
            RegisteredUser.changeDescription(this.props.username, val);
            this.handleClose(e);
        }
        else{
            errText.show();
        }
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                size="sm"
                aria-labelledby="change-description-modal"
                centered
            >
                <Modal.Header closeButton onClick={this.handleClose}>
                    <Modal.Title id="change-description-modal">
                        Change description
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span>Current description: <br/><br/>
                            {RegisteredUser.getDescription(this.props.username)}
                            <br/> <hr/>
                        </span>
                    </div>
                    <form onSubmit={this.handleSubmit} className="m-3">
                        <label className="col-label" htmlFor="new-desc-input">New description:</label>
                        <div className="col-auto input-group mt-2">
                            <span className="input-group-text"><i className="bi bi-person-fill"/></span>
                            <input type="text" placeholder="description" className="form-control" id="new-desc-input"/>
                            <div className="error-text" id="desc-choose-error">Error: Description must be 1-100 characters
                                long and contain no special characters</div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" onClick={this.handleClose}>Close</Button>
                    <Button onClick={this.handleSubmit}>Change description</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ChangeDescriptionModal;
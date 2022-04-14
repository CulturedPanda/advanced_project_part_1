import {Button, Dropdown} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {forwardRef} from "react";
import ChangePictureButton from "./MoreOptionsDropdownButtons/ChangePictureButton";
import CameraButton from "../../../../Conversation/InputBar/CameraButton";

function MoreOptionsDropdown({props}) {

    const customToggle = forwardRef(({ children, onClick }, ref) => (
        <a  className="text-dark"
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    return (
        <>
            <Dropdown className="ps-0 btn-lg" autoClose="outside" data-bs-toggle="tooltip" data-bs-placement="bottom" title="More options">
                <Dropdown.Toggle as={customToggle} className="align-content-center">
                        <i className="bi bi-three-dots-vertical"/>
                </Dropdown.Toggle>

                <DropdownMenu>
                    <DropdownItem as="form"><ChangePictureButton
                        username={props.username} updateProfilePicture={props.updateProfilePicture}/></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default MoreOptionsDropdown;
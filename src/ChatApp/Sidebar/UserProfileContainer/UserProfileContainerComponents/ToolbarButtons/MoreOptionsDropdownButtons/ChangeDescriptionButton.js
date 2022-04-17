import {Component} from "react";
import ChangeDescriptionModal from "./ChangeDescriptionModal";

class ChangeDescriptionButton extends Component {

    constructor(props) {
        super(props);
        this.state = {show: false}
    }

    handleClick = (val)=>{
        this.setState({
            show: val
        });
    }



    render() {
        return (
            <div className="d-grid hover-pointer" onClick={()=>this.handleClick(true)}>
                <span>Change description</span>
                <ChangeDescriptionModal username={this.props.username} show={this.state.show} hide={this.handleClick}/>
            </div>
        )
    }
}

export default ChangeDescriptionButton;
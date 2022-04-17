import {Component} from "react";
import ChangeTextDataModal from "./ChangeTextDataModal";

class ChangeTextDataButton extends Component {

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
            <div className="d-grid hover-pointer mb-2" onClick={()=>this.handleClick(true)}>
                <span>Change {this.props.textData}</span>
                <ChangeTextDataModal username={this.props.username} show={this.state.show} hide={this.handleClick}
                textData={this.props.textData} updateNickname={this.props.updateNickname}/>
            </div>
        )
    }
}

export default ChangeTextDataButton;
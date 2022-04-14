import RegisteredUser from "../../../../Users/RegisteredUser";

function ImageNameContainer({props}){
    return(
        <span>
            <img className="user-profile-img rounded-circle p-1 m-2"
                   src={props.profilePicture} alt="User profile image"/>
            {RegisteredUser.getNickname(props.username)}
            {props.renderNum && ("#" + RegisteredUser.getNickNum(props.username))}
                </span>
    )
}

export default ImageNameContainer;
import RegisteredUser from "../../../../Users/RegisteredUser";

function ImageNameContainer({props}){
    return(
        <span>
            <img className="user-profile-img border-circle p-1 m-2"
                   src={RegisteredUser.getImage(props.username)} alt="User profile image"/>
            {props.username}
                </span>
    )
}

export default ImageNameContainer;
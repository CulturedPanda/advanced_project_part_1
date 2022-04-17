import RegisteredUser from "../../../../Users/RegisteredUser";

function ImageNameContainer({props}) {
    return (
        <>
            {props.username &&
                <span className="break-text">
            <img className="user-profile-img rounded-circle p-1 m-2"
                 src={props.profilePicture} alt="User profile image"/>
                    <span className="break-text">
                    {props.nickname}
                    {props.renderNum && ("#" + RegisteredUser.getNickNum(props.username))}
                        </span>
        </span>
            }
        </>
    )
}

export default ImageNameContainer;
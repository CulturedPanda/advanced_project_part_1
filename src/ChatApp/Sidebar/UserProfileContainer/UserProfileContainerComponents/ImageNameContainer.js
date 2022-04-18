import RegisteredUser from "../../../../Users/RegisteredUser";

/**
 * Contains the user's profile picture, nickname, and if needed also discriminator.
 * @param props
 * @returns {JSX.Element}
 */
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
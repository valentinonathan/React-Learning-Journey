import profilePic from './assets/IMG_4087 copy.jpg'

function ProfilePicture() {

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img src={profilePic} width= "120" height= "160" onClick={(e) => handleClick(e)}></img>
    );
}

export default ProfilePicture
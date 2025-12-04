import profilePic from './assets/IMG_4087 copy.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"  width= "120" height= "160"></img>
            <h2 className="card-title">Valentino Nathan</h2>
            <p className="card-text">I am an NUS Computer Science Student</p>
        </div>
    );
}

export default Card
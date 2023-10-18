import "./ProfileCard.css" 
const ProfileCard = ({name, phone, email, image, position}) => {
    return (
        <div className="card">
            <div className="cardImg">
                <img src= {image} alt="pablo" />
            </div>
            <div className="text">
            <h2 className="title">{name}</h2>
            <h4 className="position">{position}</h4>
                <div>
                    <i className="phonenum"></i>
                    <p className="phonenum">{phone}</p>
                </div>
                <div>
                    <i className="email"></i>
                    <p className="email">{email}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard 
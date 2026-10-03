import "./userScorecard.css"
import Profile from "../profile/profile";

function UserScorecard({name, department, score}){
    return(
        <div className="scorecard">
            <Profile/>
            <div className="userInfo">
                <p className="name">{name}</p>
                <p className="department">{department}</p>
                <p></p>
            </div>
            <div className="score">
                <p>{score}pts</p>
            </div>
        </div>
    )
}

export default UserScorecard
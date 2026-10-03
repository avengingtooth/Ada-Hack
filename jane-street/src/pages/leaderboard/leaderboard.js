import BottomNav from "../../components/bottomNav/bottomNav"
import Podium from "../../components/podium/podium"
import UserScorecard from "../../components/userScorecard/userScorecard"
import "./leaderboard.css"

function Leaderboard(){
    const name = "Jane Doe"
    const score = 10000
    const department = "Technology"
    return(
        <div id="leaderboardPage">
            <h1>Leaderboard</h1>
            <Podium/>
            <div id="scorecardBox">
                <UserScorecard name={name} score={score} department={department}/>
                <UserScorecard name={name} score={score} department={department}/>
                <UserScorecard name={name} score={score} department={department}/>
                <UserScorecard name={name} score={score} department={department}/>
                <UserScorecard name={name} score={score} department={department}/>
                <UserScorecard name={name} score={score} department={department}/>
            </div>
            <BottomNav/>
        </div>
    )
}

export default Leaderboard
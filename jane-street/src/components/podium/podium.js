import Profile from "../profile/profile"
import "./podium.css"

function ColumnDisplay({name, score}){
    return (
        <>
            <Profile/>
            <p className="name">{name}</p>
            <h4 className="score">{score}</h4>
            <div className="stand"></div>
        </>
    )
}

function Podium(){
    return(
        <div id="podium">
            <div id="second" className="column">
                <ColumnDisplay name="Jane Doe" score="5000"/>
            </div>
            <div id="first" className="column">
                <ColumnDisplay name="Jane Doe" score="5000"/>
            </div>
            <div id="third" className="column">
                <ColumnDisplay name="Jane Doe" score="5000"/>
            </div>
        </div>
    )
}

export default Podium
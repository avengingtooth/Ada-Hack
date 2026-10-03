import { useState } from "react";
import "./recording.css"
import BottomNav from "../../components/bottomNav/bottomNav";
import user from "../../user";

function Recording(){
    const [methodTemp, setMethodTemp] = useState("");
    const [lengthTemp, setlengthTemp] = useState("");
    const [points, setPoints] = useState(null);

    function calculate(event) {
        event.preventDefault();

        const method = methodTemp;
        const length = Number(lengthTemp);
        let calculatedPoints;

        if (method==="car"){
            calculatedPoints = 0; //not saved/reduced on any emissions
        } else if (method==="walk" || method==="cycle"){
            calculatedPoints = 0.264 * length; //what the emissions would be using car
            user.points.walking += calculatedPoints
            console.log(user)
        } else if (method === "carpool"){
            calculatedPoints = 0.264 * length / 2 //emissions halved as car journey was shared
            user.points["carPooling"] += calculatedPoints
        } else if (method ==="public"){ //public transport
	        calculatedPoints = 0.264 * length * 3/4; //emissions reduced by 3/4
            user.points["publicTransportation"] += calculatedPoints
        }

        setPoints(calculatedPoints);

    }

    return(
        <div id="form">
            <h1>How did you get to work today?</h1>
            <form onSubmit={calculate}>
                <label id="methodTitle">Select method of transportation:
                    <br />
                    <select id="methodSelect" value={methodTemp} onChange={(event) => setMethodTemp(event.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="walk">Walked</option>
                        <option value="cycle">Cycled</option>
                        <option value="carpool">Carpooling</option>
                        <option value="public">Public Transport</option>
                        <option value="car">Drove</option>
                    </select>
                </label>

                <br />
                <br />
                <label>Enter distance of journey in miles:
                    <br />
                    <input type="number" 
                    value={lengthTemp} 
                    min="1"
                    onChange={(event) => setlengthTemp(event.target.value)} />
                </label>

                <br />
                <br />
                <button id="button" type="submit">Submit</button>
            </form>

            {points !== null && (
                <p>Your points for today: {points}</p>
            )}
            <BottomNav/>
        </div>

        
    );
}

export default Recording
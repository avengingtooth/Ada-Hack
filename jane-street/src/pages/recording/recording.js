import { useState } from "react";

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
        } else if (method === "carpool"){
            calculatedPoints = 0.264 * length / 2 //emissions halved as car journey was shared
        } else if (method ==="public"){ //public transport
	        calculatedPoints = 0.264 * length * 3/4; //emissions reduced by 3/4
        }

        setPoints(calculatedPoints);

    }

    return(
        <div id="form">
            <h1>How did you get to work today?</h1>
            <form onSubmit={calculate}>
                <label>Usual Route</label>
                <br />
                <label>Select method of transportation:
                    <select value={methodTemp} onChange={(event) => setMethodTemp(event.target.value)}>
                        <option value="walk">Walked</option>
                        <option value="cycle">Cycled</option>
                        <option value="carpool">Carpooling</option>
                        <option value="public">Public Transport</option>
                        <option value="car">Drove</option>
                    </select>
                </label>

                <br />
                <label>Enter distance of journey in miles:
                    <input type="number" 
                    value={lengthTemp} 
                    min="1"
                    onChange={(event) => setlengthTemp(event.target.value)} />
                </label>

                <br />
                <button type="submit">Submit</button>
            </form>

            {points !== null && (
                <p>Your points for today: {points}</p>
            )}
        </div>
    );
}

export default Recording
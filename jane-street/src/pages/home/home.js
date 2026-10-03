import "./home.css"
import BottomNav from "../../components/bottomNav/bottomNav"
import AddTravel from "../../components/addTravel/addTravel"
import Profile from "../../components/profile/profile"
import DonutChart from "../../components/donutChart/donutChart"

const user = {
    "name": "Jane Doe",
    "department": "Communications",
    "points": {
        "walking": 50,
        "other": 20,
        "cycling": 40,
        "publicTransportation": 10,
        "carPooling": 43
    }
}

function Home(){
    return (
        <div id="homePage">
            <Profile greeting={true} name={user.name}/>
            <DonutChart points={user.points}/>
            <AddTravel />
            <BottomNav curPage="home"></BottomNav>
        </div>
    )
}

export default Home
import "./home.css"
import BottomNav from "../../components/bottomNav/bottomNav"
import AddTravel from "../../components/addTravel/addTravel"
import Profile from "../../components/profile/profile"
import DonutChart from "../../components/donutChart/donutChart"

function Home(){
    return (
        <div id="homePage">
            <Profile greeting={true}/>
            <DonutChart />
            <AddTravel />
            <BottomNav curPage="home"></BottomNav>
        </div>
    )
}

export default Home
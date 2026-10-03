import "./bottomNav.css"
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import RedeemIcon from '@mui/icons-material/Redeem';
import Profile from "../profile/profile";


function BottomNav(curPage){
    const pages = [
        [<HomeIcon/>, "/", "home"], 
        [<LeaderboardIcon/>, "/leaderboard", "leaderboard"],
        [<RedeemIcon/>, "/reward", "reward"],
        [<Profile/>, "/", "profile"]
    ]
    return(
        <div id="bottomNav">
            {
                pages.map(page => {
                    console.log(page)
                    return <a key={page[2]} href={page[1]}>{page[0]}</a>
                })
            }
        </div>
    )
}

export default BottomNav
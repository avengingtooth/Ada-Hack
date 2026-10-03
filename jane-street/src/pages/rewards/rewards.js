import BottomNav from "../../components/bottomNav/bottomNav";
import Profile from "../../components/profile/profile";
import RewardBox from "../../components/rewardBox/rewardBox";
import "./rewards.css"

function Rewards(){
    // const wonLastMonth = true
    const rewards = ["Pizza Party", "Donate to Charity","Pizza Party", "Donate to Charity","Pizza Party", "Donate to Charity","Pizza Party", "Donate to Charity"]
    return(
        <div id="rewardsPage">
            <Profile greeting={true}/>
            <h1>Vote For Your Reward</h1>
            {
                rewards.map(reward => {
                    return(
                        <RewardBox reward={reward}/>
                    )
                })
            }
            <BottomNav/>
        </div>
    )
}

export default Rewards
import "./rewardBox.css"
import Button from '@mui/material/Button';

function RewardBox({reward, score}){
    return(
        <div className="rewardBoxes">
            <h2>{reward}</h2>
            <Button>Vote For Reward</Button>
        </div>
    )
}

export default RewardBox
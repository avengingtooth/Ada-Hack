import Avatar from '@mui/material/Avatar';
import "./profile.css"

function Profile({greeting}){
    return(
        <div id="profile">
            <Avatar alt="Profile Picture" src="/images/defaultPfp.jpg" />
        {
            greeting?<h1 id="greeting">Hello Employee!</h1>:<></>
        }
        </div>
    )
}

export default Profile
import UsersContainer from '../containers/UsersContainer';
import SignInPopUpWindow from './SignInPopUpWindow';
import './Home.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Home = ({ addFormUser, createUser, currentUser, formUser }) => {
    const [popUpOpen, setPopUpOpen] = useState(false)

    const togglePopUpWindow = () => {
        setPopUpOpen(!popUpOpen)
    }

    return (
        <div className="home-page">
            <div className="home-page-content">
                <h1>The Wonders of The World</h1>
                <img src={"/img/wonderlogo.gif"}></img>
                {!currentUser ? <button className="sign-in-button" type="button" onClick={togglePopUpWindow}><span>Sign-in</span></button> : null}
                {popUpOpen && <SignInPopUpWindow currentUser={currentUser} content={<UsersContainer addFormUser={addFormUser} createUser={createUser} currentUser={currentUser} formUser={formUser} />} handlePopUpClose={togglePopUpWindow} />}
            </div>
            {currentUser ?
                <div className='front-btn'>
                    <Link to="/new">
                    <button type="button"><span>🕌<br />New</span></button>
                    </Link>
                    <Link to="/ancient"><button type="button"><span>🏛<br />Ancient</span></button>
                    </Link>
                    <Link to="/natural">
                    <button type="button"><span>🏔<br />Natural</span></button>
                    </Link>
                </div>
                : null}

        </div>
    )
}

export default Home;
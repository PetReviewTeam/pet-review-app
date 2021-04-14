import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
import {useState} from 'react';

const Heart = (props) => {
    const [heart, setHeart] = useState(false)
    const handleClick = (e) => {
        console.log(e)
        setHeart(true);
        const dbRef = firebase.database().ref()
    }

    return (
        <div className="heart">
            <p>0</p>
            {
                heart ? (<button className="clickedHeart" onClick={handleClick}disabled><FontAwesomeIcon icon={faHeart}/></button>) : (<button className="unclickedHeart" onClick={handleClick}><FontAwesomeIcon icon={faHeart}/></button>)
            }
        </div>
    )    
}


export default Heart;
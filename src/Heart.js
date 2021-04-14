import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
import {useState, useEffect} from 'react';

const Heart = (props) => {
    const [heart, setHeart] = useState(false)
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setHeart(true);
        const dbRef = firebase.database().ref(props.petObj.id)
        if (heart===false) {
            dbRef.child('heart').push('1 heart click')
        }
    }
    
    useEffect( () => {
        const dbRef = firebase.database().ref(props.petObj.id)
        dbRef.on('value', (response) => {
            const heartArray = [];
            const data = response.val();
            for (let key in data.heart) {
                heartArray.push(key);
            }
            setCounter(heartArray.length);
        })
    }, [props.petObj.id])

    return (
        <div className="heart">
            <p>{counter}</p>
            {
                heart ? (<div className="clickedHeart" onClick={handleClick}><FontAwesomeIcon icon={faHeart}/></div>) : (<div className="unclickedHeart" onClick={handleClick}><FontAwesomeIcon icon={faHeart}/></div>)
            }
        </div>
    )    
}


export default Heart;
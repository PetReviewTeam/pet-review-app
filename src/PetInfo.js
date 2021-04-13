import PetReview from './PetReview.js';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';

const PetInfo = (props) => {
    const [userInput, setUserInput] = useState('');
    const [review, setReview] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref(props.id);
        if (userInput) {
            dbRef.child('reviews').push(userInput);
            setUserInput('');
        }
    }

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const chevronDown = <FontAwesomeIcon 
    icon={faChevronDown} 
    aria-hidden="false" 
    title="Hide reviews"
    />

    const chevronUp =  <FontAwesomeIcon 
    icon={faChevronUp}
    aria-hidden="false" 
    title="Show reviews"/>

    return (
        <>
            <div className="petInfoBox">
                <div className="imgContainer">
                    <img src={props.image} alt=""/>
                </div>
                <ul className="information">
                    <li>
                        <h3><span className="petAttribute">Name:</span> {props.name}</h3>
                    </li>
                    <li>
                        <p><span className="petAttribute">Species:</span> {props.species}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Age:</span> {props.age} years</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Likes:</span> {props.likes}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Dislikes:</span> {props.dislikes}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Personality:</span> {props.personality}</p>
                    </li>     
                </ul>
                <form action="submit" className="review">
                    <label htmlFor="leaveReview" className="sr-only"></label>
                    <textarea 
                    name="leaveReview" 
                    id="leaveReview" 
                    placeholder="Tell me that I'm cute or something🥰" 
                    value={userInput} 
                    onChange={handleChange}></textarea>
                    <button onClick={handleClick}>Submit</button>
                </form>
                <div className="reviewButton" onClick={() => {setReview(!review)}}>
                    {review ? chevronDown : chevronUp }
                </div>
            </div>
            {review && <PetReview reviews={props.reviewObj}/>}
            
        </>
    )
}

export default PetInfo;
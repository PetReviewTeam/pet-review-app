import PetReview from './PetReview.js';
import {useState, useEffect} from 'react';

const PetInfo = (props) => {
    const [review, setReview] = useState('');
    const [userInput, setUserInput] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (
        <>
            <div className="petInfoBox">
                <div className="imgContainer">
                    <img src={props.image} alt=""/>
                </div>
                <ul className="information">
                    <li>
                        <p><span className="petAttribute">Species:</span> {props.species}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Name:</span> {props.name}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Age:</span> {props.age} years</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Personality:</span> {props.personality}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Likes:</span> {props.likes}</p>
                    </li>
                    <li>
                        <p><span className="petAttribute">Dislikes:</span> {props.dislikes}</p>
                    </li>     
                </ul>
                <form action="submit" className="review">
                    <label htmlFor="leaveReview" className="sr-only"></label>
                    <textarea name="leaveReview" id="leaveReview" placeholder="Leave a message about the pet!"></textarea>
                    <button onClick={handleClick}>Submit</button>
                </form>
            </div>
            <PetReview />
        </>
    )
}
 
export default PetInfo;
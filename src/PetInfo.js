const PetInfo = (props) => {
    return (
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
            <textarea name="leaveReview" id="leaveReview" cols="30" rows="10" placeholder="Leave a message about the pet!"></textarea>
            <button>Submit</button>
        </form>
    </div>
    )
}
 
export default PetInfo;
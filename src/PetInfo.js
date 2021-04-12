const PetInfo = (props) => {
    return(
        <div>
            <div className="petInformation">
                <div className="imageContainer">
                    <img src={props.url} alt={props.name}/>
                </div>
                <div className="petText">
                <h3>{props.name}</h3>
                <h4>{props.species}</h4>
                <ul>
                    <li>
                        <p>Age: {props.age}</p>
                    </li>
                    <li>
                        <p>Likes: {props.likes}</p>
                    </li>
                    <li>
                        <p>Dislikes: {props.dislikes}</p>
                    </li>
                    <li>
                    <p>Personality: {props.personality}</p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default PetInfo;
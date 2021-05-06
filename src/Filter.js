import { useState } from 'react';

function Filter(props) {
    const [userChoice, setUserChoice] = useState('all');

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    return (
        <form onSubmit={(e) => props.filteredPets(e, userChoice)}>
            <>
            <div className="selection">
                <h3>Select pets by species</h3>
                <div className="dropDownDiv">
                    <select 
                        name="petSpecies" 
                        id="petSpecies" 
                        value={userChoice}
                        onChange={handleUserChoice}
                    >
                        <option value="all" id="dropDown">All</option>
                        <option value="bird" id="dropDown">Bird</option>
                        <option value="cat" id="dropDown">Cat</option>
                        <option value="dog" id="dropDown">Dog</option>
                        <option value="fish" id="dropDown">Fish</option>
                        <option value="rabbit" id="dropDown">Rabbit</option>
                        <option value="reptile" id="dropDown">Reptile</option>
                        <option value="other" id="dropDown">Other</option>
                    </select>
                </div>
                <button type="submit" className="filterButton">Show Me Those Pets</button>
            </div>
            </>
        </form>
    )
}

export default Filter;
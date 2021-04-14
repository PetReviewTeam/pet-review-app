import { useState } from 'react';

function Filter(props) {
    const [userChoice, setUserChoice] = useState('all');

    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }

    return (
        <form onSubmit={(e) => props.filteredPets(e, userChoice)}>
            <h4>Select pets by species</h4>
            <select 
                name="petSpecies" 
                id="petSpecies" 
                value={userChoice}
                onChange={handleUserChoice}
            >
                <option value="all">All</option>
                <option value="bird">Bird</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="fish">Fish</option>
                <option value="rabbit">Rabbit</option>
                <option value="reptile">Reptile</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Show Me Those Pets</button>
        </form>
    )
}

export default Filter;
import {useState} from 'react';
import firebase from './firebase';

const UserPetForm = () => {
    const [userPet, setUserPet] = useState({
        name: "",
        age: "",
        species: "placeholder",
        likes: "",
        dislikes: "",
        image: "",
        personality: "",
    });


    const submitButton = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(userPet);
        setUserPet({
            name: "",
            age: "",
            species: "",
            likes: "",
            dislikes: "",
            image: "",
            personality: "",
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setUserPet({
            ...userPet,
            [e.target.name]:value})
    }

    return (
        <form action="submit" className="petEntry" onSubmit={submitButton}>
            <label htmlFor="name" className="sr-only">What is your pet's name?</label>
            <input type="text" 
            id="name" 
            name="name"
            maxLength="15" 
            placeholder="Pet's Name" 
            value={userPet.name} 
            onChange={handleChange}
            required/>

            <label htmlFor="species" className="sr-only">What is your pet's species?</label>
            <select 
                name="species" 
                id="species" 
                value={userPet.species}
                onChange={handleChange}
            >
                <option value="placeholder" disabled>Select Pet Species</option>
                <option value="Bird">Bird</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Fish">Fish</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Reptile">Reptile</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="age" className="sr-only">How old is your pet</label>
            <input type="number" 
            id="age" 
            name="age" 
            maxLength="3" 
            min="0"
            placeholder="Pet's Age" 
            value={userPet.age} 
            onChange={handleChange}
            required/>

            <label htmlFor="likes" className="sr-only">What does your pet like?</label>
            <input 
            type="text" 
            id="likes" 
            name="likes" 
            maxLength="20" 
            placeholder="Pet's Likes" 
            value={userPet.likes} 
            onChange={handleChange}
            required/>

            <label htmlFor="dislikes" className="sr-only">What does your pet not like?</label>
            <input type="text" 
            id="dislikes" 
            name="dislikes"
            maxLength="20" 
            placeholder="Pet's Dislikes"
            value={userPet.dislikes} 
            onChange={handleChange}
            required/>
            
            <label htmlFor="personality" className="sr-only">What is your pet's personality like?</label>
            <input type="text" 
            id="personality" 
            name="personality"
            maxLength="30" 
            placeholder="Pet's Personality" 
            value={userPet.personality} 
            onChange={handleChange}
            required/>

            <label htmlFor="petImage" className="sr-only">Enter the URL for your pet photo!</label>
            <input type="url" 
            id="image" 
            name="image" 
            placeholder="Pet Image URL"
            value={userPet.image} 
            onChange={handleChange}
            required/>

            <button className="entryButton" type="submit">Submit for Boops</button>
        </form>
    )
}


export default UserPetForm;
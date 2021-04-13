import {useState} from 'react';
import firebase from './firebase';

const UserPetForm = () => {
    const [userPet, setUserPet] = useState({
        name: "",
        age: "",
        species: "",
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
            placeholder="Pet Name" 
            value={userPet.name} 
            onChange={handleChange}
            required/>

            <label htmlFor="age" className="sr-only">How old is your pet</label>
            <input type="number" 
            id="age" 
            name="age" 
            maxLength="3" 
            placeholder="Pet Age" 
            value={userPet.age} 
            onChange={handleChange}
            required/>

            <label htmlFor="species" className="sr-only">What is yourPet's species?</label>
            <input type="text" 
            id="species" 
            name="species"
            maxLength="15" 
            placeholder="Pet Species" 
            value={userPet.species} 
            onChange={handleChange}
            required/>

            <label htmlFor="likes" className="sr-only">What does your petlike?</label>
            <input 
            type="text" 
            id="likes" 
            name="likes" 
            maxLength="20" 
            placeholder="Pet's Likes" 
            value={userPet.likes} 
            onChange={handleChange}
            required/>

            <label htmlFor="dislikes" className="sr-only">What does yourpet not like?</label>
            <input type="text" 
            id="dislikes" 
            name="dislikes"
            maxLength="20" 
            placeholder="Pet's Dislikes"
            value={userPet.dislikes} 
            onChange={handleChange}
            required/>
            
            <label htmlFor="personality" className="sr-only">What is yourpet's personality like?</label>
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

            <button type="submit">Show off your pet!</button>
        </form>
    )
}


export default UserPetForm;
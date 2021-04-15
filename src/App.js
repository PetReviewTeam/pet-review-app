import './App.css';
import firebase from './firebase';
import Header from './Header.js';
import {useState, useEffect} from 'react';
import Filter from './Filter.js';
import PetInfo from './PetInfo.js';
import UserPetForm from './UserPetForm.js';
import Footer from './Footer.js';

function App() {
  const [petInfo, setPetInfo] = useState([]);
  const [filteredPet, setFilteredPet] = useState([]);

  useEffect( () => {
    const dbRef = firebase.database().ref()
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let key in data) {
        newState.push({
          age: data[key].age,
          dislikes: data[key].dislikes,
          likes: data[key].likes,
          name: data[key].name,
          personality: data[key].personality,
          species: data[key].species,
          image: data[key].image,
          id: key,
          reviews: data[key].reviews
        })
      };
      setPetInfo(newState);
      setFilteredPet(newState);
    });
  }, []);

  const filterPets = (e, userChoice) => {
    e.preventDefault();
    const copyOfPetInfo = [...petInfo]
    if (userChoice === 'all') {
      setFilteredPet(copyOfPetInfo)
    } else {
        const filteredPetInfo = copyOfPetInfo.filter( (pet) => {
        return pet.species.toLowerCase() === userChoice;
      });
      setFilteredPet(filteredPetInfo);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Filter pet={petInfo} filteredPets={filterPets}/>
        <div className="petInfoFlex">
          {filteredPet.length === 0 ? (
            <div className="petInfoBox" id="noPets">
              <h2>Sorry, no information for this adorable pet is available. Please upload yours!</h2>
            </div>
          ) : (
            <>
            {
              filteredPet.map( (petObject, i) => {
                return (
                  <PetInfo 
                  name={petObject.name} 
                  age={petObject.age}
                  dislikes={petObject.dislikes}
                  likes={petObject.likes}
                  personality={petObject.personality}
                  species={petObject.species}
                  image={petObject.image}
                  id={petObject.id}
                  reviewObj={petObject.reviews}
                  key={`pet${i}`}/>
                )
              })
            }
            </>
          )
          }
          
        </div>
        <UserPetForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// create firebase.js and export
// create header component
// Create pet description component
    // Img, petdescription and review form in separate divs
    // submit review button with onclick
        // on click, empty out review textarea
    // img, petdescription - in firebase database for MVP
    // useState
        // for review
        // userReview, setUserReview
        // get value on onChange
    // useEffect on page load (so empty dependancy)
// create review component
// Collapsible chevron bottom left with position absolute
// When leaving review, select random names from a name array. 



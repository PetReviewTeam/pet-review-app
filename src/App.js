import './App.css';
import firebase from './firebase';
import Header from './Header.js';
import {useState, useEffect} from 'react';
import PetInfo from './PetInfo.js';
import Footer from './Footer.js';



function App() {
  const [petInfo, setPetInfo] = useState([])

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
          image: data[key].url,
          id: key,
          reviews: data[key].reviews
        })
      };
      setPetInfo(newState);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="petInfoFlex">
          {
            petInfo.map( (petObject, i) => {
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
        </div>
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



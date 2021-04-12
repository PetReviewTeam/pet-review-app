import './App.css';
import firebase from './firebase';
import Header from './Header.js';
import {useState, useEffect} from 'react';
import PetInfo from './PetInfo';
import Footer from './Footer.js'



function App() {
  // const [review, setReview] = useState('');
  // const [userInput, setUserInput] = useState('');
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
          url: data[key].url,
          id: key
        })
      };
      setPetInfo(newState);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ul>
      {
        petInfo.map( (petArray, index) => {
          return (
            // console.log(petArray)
            <PetInfo
              species={petArray.species}
              name={petArray.name}
              age={petArray.age}
              likes={petArray.likes}
              dislikes={petArray.dislikes}
              personality={petArray.personality}
              url={petArray.url}
              id={petArray.id}
              key={`pet${index}`}
            />

          )
        })
      }
      </ul>
      <div>
        <Footer />
      </div>
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



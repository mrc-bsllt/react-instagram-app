import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import NavCustom from "./components/NavCustom";
import MainCustom from "./components/MainCustom";

const App = () => {
  const [stories, setStories] = useState([]);
  const [iteration, setIiteration] = useState(0);
  const [remainingStories, setRemainingStories] = useState(0);

  //prendo le storie dall'API
  const getStories = () => {
    axios.get("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
      .then((response) => {
        const resultStories = [...response.data, 
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
          {
            profile_picture: "https://thypix.com/wp-content/uploads/beautiful-profile-picture-hidden-face-girl-63.jpg",
            profile_name: "dna_lor"
          },
        ];

        setStories(resultStories);
        setRemainingStories(resultStories.length - 7);
        
      });
  }

  //incremento della index per spostare il carosello verso sinistra
  const increaseIndex = (value, storiesValue) => {
    if(value >= 7) {
      setRemainingStories(storiesValue + 7);
      setIiteration(value - 7);
    } else {
      setIiteration(0);
    }
    
  }

  //decremento della index per spostare il carosello verso destra
  const decreaseIndex = (value, storiesValue) => {
    if(storiesValue >= 7) {
      setRemainingStories(storiesValue - 7);
      setIiteration(value + 7);
    } else {
      setIiteration(value + storiesValue);
    }

  }
  
  useEffect(() => {
    getStories();
    }, [])
      
  return (
    <div className="App">
      <NavCustom />
      <MainCustom stories={ stories } iteration={ iteration } increaseIndex={ increaseIndex } decreaseIndex={ decreaseIndex } remainingStories={ remainingStories }/>
    </div>
  );
}

export default App;

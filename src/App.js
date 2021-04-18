import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import NavCustom from "./components/NavCustom";
import MainCustom from "./components/MainCustom";

const App = () => {
  const [stories, setStories] = useState([]);
  const [indexFirstStory, setIndexFirstStory] = useState(0)

  //prendo le storie dall'API
  const getStories = () => {
    axios.get("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
      .then((response) => {
        const resultStories = response.data;

        setStories([ ...resultStories,
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
        ]);
      });
  }

  //incremento della index per spostare il carosello verso sinistra
  const increaseIndex = (value) => {
    setIndexFirstStory(value + 1)
    
  }

  //decremento della index per spostare il carosello verso destra
  const decreaseIndex = (value) => {
    setIndexFirstStory(value - 1)
  }
  
  useEffect(() => {
    getStories();
    }, [])

  return (
    <div className="App">
      <NavCustom />
      <MainCustom stories={ stories } indexFirstStory={ indexFirstStory } increaseIndex={ increaseIndex } decreaseIndex={ decreaseIndex } />
    </div>
  );
}

export default App;

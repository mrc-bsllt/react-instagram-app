import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import NavCustom from "./components/NavCustom";
import MainCustom from "./components/MainCustom";

const App = () => {
  const [stories, setStories] = useState([]);

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
  useEffect(() => {
    getStories();
    }, [])

  return (
    <div className="App">
      <NavCustom />
      <MainCustom stories={ stories }/>
    </div>
  );
}

export default App;

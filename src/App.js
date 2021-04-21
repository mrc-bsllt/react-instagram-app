import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import axios from "axios";
import './App.css';
import NavCustom from "./components/NavCustom";
import MainCustom from "./components/MainCustom";

const App = () => {

  const [stories, setStories] = useState([]);
  const [iteration, setIiteration] = useState(0);
  const [remainingStories, setRemainingStories] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isUploading, setIsUploanding] = useState(true);

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
        setTimeout(function() {
          setIsUploanding(false);
        }, 1000)
        setStories(resultStories);
        setRemainingStories(resultStories.length - 7);
        
      });
  }

  //prendo i posts dall'API
  const getPosts = () => {
    axios.get("https://flynn.boolean.careers/exercises/api/boolgram/posts")
      .then((response) => {
        const resultPosts = response.data;
        setPosts(resultPosts);
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

  //funzione per aggiungere un commento
  const addComment = (text, indexPost) => {
    const postComments = posts[indexPost].comments;
    postComments.unshift({ username: "mrc_bsllt", text: text });
    
    const newPosts = posts.map(
      (element, index) => {
        if(index === indexPost) {
          return { ...element, comments: postComments }
        }

        return element;
      }

    );

    setPosts(newPosts);
  }
  
  useEffect(() => {
    getStories();
    getPosts();
    }, [])
      
  return (
    <div className="App">
      <NavCustom />
      <MainCustom 
        isUploading={ isUploading }
        stories={ stories } 
        iteration={ iteration } 
        increaseIndex={ increaseIndex } 
        decreaseIndex={ decreaseIndex } 
        remainingStories={ remainingStories }
        posts={ posts }
        addComment={ addComment }
      />
    </div>
  );
}

export default App;

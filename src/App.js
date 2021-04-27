import { useEffect, useState } from "react";
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
  const [uploadComment, setUploadComment] = useState(false);

  //prendo le storie dall'API
  const getStories = () => {

    const storiesImages = [
      "https://semplicecome.it/wp-content/uploads/2019/07/belle_foto_smartphone.jpg",
      "https://www.frasimania.it/wp-content/uploads/2018/02/frasi-per-instagram-belle-1200x840.jpg",
      "https://www.voglioviverecosi.com/wp-content/uploads/2020/08/FRASI-MARE-TOP-1900x1080.jpg",
      "https://frasissime.com/wp-content/uploads/2020/02/immagini-frasi-primavera-belle-1200x900.jpg",
      "https://www.amauriph.it/wp-content/uploads/2020/02/blog-copertine-articoli.jpg",
      "https://cdn.peopleforplanet.it/wp-content/uploads/2020/12/93422707_2671751039711327_6244134664512995328_o.jpg",
      "https://www.istantiinviaggio.it/wp-content/uploads/2019/08/D2D_1569.jpg",
      "https://www.ilmiogattoeleggenda.it/wp-content/uploads/2019/06/Gatti-carinissimi-foto-e-immagini-pi%C3%B9-belle-15.jpg",
      "https://hips.hearstapps.com/cit.h-cdn.co/assets/17/14/1491579599-citta-piu-belle-del-mondo-da-vedere.jpg",
      "https://www.cinematographe.it/wp-content/uploads/2019/05/La-belle-%C3%A9poque-4.jpg",
      "https://images.wired.it/gallery/98224/Big/390d79eb-daab-4b6b-a7bf-de1a968367fd.jpg",
      "https://www.motorionline.com/wp-content/uploads/2017/10/strade-piu-belle-italia-1280x720.jpg",
      "https://i2.wp.com/lifestar.it/wp-content/uploads/2018/08/frasi-belle-2.jpg?ssl=1",
      "https://www.dire.it/wp-content/uploads/2020/11/anticorpi-bolognesi-_giulio-de-meo6.jpg",
      "https://www.slamp.com/wp-content/uploads/2018/09/02-la-belle-etoile-suspension_slider.jpg",
      "https://www.pasticceriabellehelene.it/assets/media/images/galleries/slide_home/top_image_gallery_02.jpg",
    ];

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

        // aggiungo alle storie la propria immagine associata
        for(let i = 0; i < resultStories.length; i++) {
          resultStories[i].story_image = storiesImages[i];
        }

        setTimeout(function() {
          setIsUploanding(false);
        }, 1000);

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

    setUploadComment(true);    

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

    setTimeout(function() {
      setUploadComment(false);
    }, 500);
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
        uploadComment= { uploadComment }
      />
    </div>
  );
}

export default App;

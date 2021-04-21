import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";

const MainCustom = ({ stories, iteration, increaseIndex, decreaseIndex, remainingStories, posts, addComment }) => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <Carousel 
                        stories={ stories } 
                        iteration={ iteration } 
                        increaseIndex={ increaseIndex } 
                        decreaseIndex={ decreaseIndex } 
                        remainingStories={ remainingStories }
                    />
                    <Posts posts={ posts } addComment={ addComment } />
                </div>
                <div className="right">
                    <section className="switch_profile">
                        <div className="left">
                            <img src="img/profilo.jpg" alt="foto_profilo"/>
                        </div>
                        <div className="center">
                            <p>mrc_bsllt</p>
                            <p>Marco Busellato</p>
                        </div>
                        <div className="right">
                            <a href="#">Passa a</a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default MainCustom;
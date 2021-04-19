import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";

const MainCustom = ({ stories, iteration, increaseIndex, decreaseIndex, remainingStories, posts }) => {
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
                    <Posts posts={ posts } />
                </div>
                <div className="right"></div>
            </div>
        </main>
    )
}

export default MainCustom;
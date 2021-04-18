import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";

const MainCustom = ({ stories, indexFirstStory, increaseIndex, decreaseIndex }) => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <Carousel stories={ stories } indexFirstStory={ indexFirstStory } increaseIndex={ increaseIndex } decreaseIndex={ decreaseIndex } />
                    <Posts />
                </div>
                <div className="right"></div>
            </div>
        </main>
    )
}

export default MainCustom;
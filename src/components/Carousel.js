import "../css/Carousel.css"
import Story from "./Story";

const Carousel = ({ stories, indexFirstStory, increaseIndex, decreaseIndex }) => {
    const leftPosition = -(indexFirstStory * 80);

    return (
        <div className="carousel">
            <div className="prev" onClick={ () => increaseIndex(indexFirstStory) } >
                <i className="fas fa-angle-left"></i>
            </div>

            <div className="slider" style={{ left: leftPosition }}>
               { stories.map((story, index) => <Story key={ index } story={ story } index={ index } /> ) } 
            </div>
            
            <div className="next">
                <i className="fas fa-angle-right" onClick={ () => decreaseIndex(indexFirstStory) } ></i>
            </div>
        </div>
    )
}

export default Carousel;
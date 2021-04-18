import "../css/Carousel.css"
import Story from "./Story";

const Carousel = ({ stories, iteration, increaseIndex, decreaseIndex, remainingStories }) => {
    const leftPosition = -(iteration * 98);

    return (
        <div className="carousel">
            { iteration > 0 && (
                <div className="prev" onClick={ () => increaseIndex(iteration, remainingStories) } >
                    <i className="fas fa-angle-left"></i>
                </div>
            )}

            <div className="slider" style={{ left: leftPosition }}>
               { stories.map((story, index) => <Story key={ index } story={ story } index={ index } /> ) } 
            </div>
            
            { iteration !== stories.length - 7 && (
                <div className="next" onClick={ () => decreaseIndex(iteration, remainingStories) } >
                    <i className="fas fa-angle-right"></i>
                </div>
            )}
        
            
        </div>
    )
}

export default Carousel;
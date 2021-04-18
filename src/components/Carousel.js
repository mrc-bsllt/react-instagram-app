import "../css/Carousel.css"
import Story from "./Story";

const Carousel = ({ stories }) => {
    return (
        <div className="carousel">
            <div className="slider">
               { stories.map((story, index) => <Story key={ index } story={ story } index={ index } /> ) } 
            </div>
        </div>
    )
}

export default Carousel;
import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";

const MainCustom = ({ stories }) => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <Carousel stories={ stories } />
                    <Posts />
                </div>
                <div className="right"></div>
            </div>
        </main>
    )
}

export default MainCustom;
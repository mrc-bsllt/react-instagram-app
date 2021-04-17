import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";

const MainCustom = () => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <Carousel />
                    <Posts />
                </div>
                <div className="right"></div>
            </div>
        </main>
    )
}

export default MainCustom;
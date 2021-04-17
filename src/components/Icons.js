import "../css/Icons.css";
import Icon from "./Icon";

const Icons = () => {
    const iconsLIst = [
        {
            image: "home.svg",
            alt: "home"
        },
        {
            image: "paper.svg",
            alt: "paper"
        },
        {
            image: "compass.svg",
            alt: "compass"
        },
        {
            image: "heart.svg",
            alt: "heart"
        },
    ];

    return (
        <div className="icons_container">
            { iconsLIst.map((icon, index) => <Icon key={ index } image={ icon.image } alt={ icon.alt }/>) }
        </div>
    )
}

export default Icons;
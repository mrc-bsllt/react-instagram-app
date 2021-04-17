import "../css/icon.css";

const Icon = ({ image, alt }) => {

    return(
        <img src={`img/icons/${image}`} alt={ `${alt}_icon` } className="icon"/>
    )
}

export default Icon;
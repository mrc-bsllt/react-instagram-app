import "../css/BottomPost.css";
import Comments from "./Comments";
const BottomPost = () => {
    return (
        <div className="bottom_post">
            <div className="icons">
                <img src="img/icons/heart.svg" alt="heart_icon"/>
                <img src="img/icons/chat.svg" alt="chat_icon"/>
            </div>

            <div className="feeds">
                <img src="img/profilo.jpg" alt="first comment avatar"/>
                <p>Piace a <strong>Username-primo-commento</strong> e <strong>altri 4</strong></p>
            </div>

            <div className="post_description">
                <h4>Username-creator-post</h4>
                <p>Descrizione del post...</p>
            </div>

            <Comments />
        </div>
    )
}

export default BottomPost;
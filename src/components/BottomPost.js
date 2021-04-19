import "../css/BottomPost.css";
import Comments from "./Comments";
import FormCustom from "./FormCustom";

const BottomPost = ({ post }) => {
    const likesArray = post.likes;

    return (
        <div className="bottom_post">
            <div className="icons">
                <img src="img/icons/heart.svg" alt="heart_icon"/>
                <img src="img/icons/chat.svg" alt="chat_icon"/>
            </div>

            { likesArray.length > 0 && (
                <div className="feeds">
                    <img src={ likesArray[0].profile_picture } alt="first comment avatar"/>

                    { likesArray.length > 1 ? (
                        <p>Piace a <strong>{ likesArray[0].username }</strong> e <strong>altri { likesArray.length - 1 }</strong></p>
                    ) : (
                        <p>Piace a <strong>{ likesArray[0].username }</strong></p>
                    )}
                </div>
            )}

            <div className="post_description">
                <h4>{ post.profile_name }</h4>
                <p>{ post.post_text }</p>
            </div>

            <Comments />

            <p className="date_post">3 ORE FA</p>

            <FormCustom />
        </div>
    )
}

export default BottomPost;
import "../css/BottomPost.css";
import Comments from "./Comments";
import FormCustom from "./FormCustom";

const BottomPost = ({ post, index, addComment }) => {
    var moment = require('moment');
    
    const likesArray = post.likes;
    const commentsArray = post.comments;
    let datePost = (post.date.date.split(" ")[0].split("-") + post.date.date.split(" ")[1].split(":")[0]).split(",");
    datePost = moment(datePost, "YYYYMMDDh").fromNow().toUpperCase();

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
            
            { commentsArray.length > 0 && (
                <Comments commentsArray={ commentsArray } />
            )}

            <p className="date_post">{ datePost }</p>

            <FormCustom index={ index } addComment={ addComment } />
        </div>
    )
}

export default BottomPost;
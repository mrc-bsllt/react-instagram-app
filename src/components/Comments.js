import "../css/Comments.css";
import Comment from "./Comment";

const Comments = () => {
    return(
        <div className="comments">
            <p>Mostra tutti e 5 commenti</p>
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default Comments;
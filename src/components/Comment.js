import "../css/Comment.css";

const Comment = ({ comment }) => {
    return(
        <div className="comment">
            <h4>{ comment.username }</h4>
            <p>{ comment.text.substr(0, 30) }</p>
        </div>
    )
}

export default Comment;
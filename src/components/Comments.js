import "../css/Comments.css";
import Comment from "./Comment";

const Comments = ({ commentsArray }) => {
    return(
        <div className="comments">
            {/* <p>Mostra tutti e 5 commenti</p>
            <Comment />
            <Comment />
            <Comment /> */}
            { commentsArray.length > 3 && (
                <p>{`Mostra tutti e ${commentsArray.length} commenti`}</p>
            )}
            { commentsArray.map((comment, index) => <Comment key={ index } />) } 
        </div>
    )
}

export default Comments;
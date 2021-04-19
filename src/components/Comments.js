import "../css/Comments.css";
import Comment from "./Comment";

const Comments = ({ commentsArray }) => {
    const filterComments = commentsArray.filter(
        (comment, index) => {
            return index < 3;
        }
    );

    return(
        <div className="comments">
            { commentsArray.length > 3 && (
                <p>{`Mostra tutti e ${commentsArray.length} commenti`}</p>
            )}

            { filterComments.map((comment, index) => <Comment key={ index } comment={ comment } />) } 
        </div>
    )
}

export default Comments;
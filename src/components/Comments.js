import "../css/Comments.css";
import Comment from "./Comment";
import Loader from "./Loader";

const Comments = ({ commentsArray, uploadComment }) => {
    let displayPropriety = uploadComment ? 'none' : 'block';
    let heightPropriety = uploadComment ? '83px' : 'inherit';

    const filterComments = commentsArray.filter(
        (comment, index) => {
            return index < 3;
        }
    );

    return(
        <div className="comments" style={{ height: heightPropriety }}>
            { commentsArray.length > 3 && (
                <p style={{ display: displayPropriety }}>{`Mostra tutti e ${commentsArray.length} commenti`}</p>
            )}
            
            { !uploadComment ? (

                filterComments.map((comment, index) => <Comment key={ index } comment={ comment } />)

            ) : (

                <Loader />

            )}
             
        </div>
    )
}

export default Comments;
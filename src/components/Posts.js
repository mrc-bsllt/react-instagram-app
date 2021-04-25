import "../css/Posts.css";
import Post from "./Post";

const Posts = ({ posts, addComment, uploadComment }) => {
    return (
        <section className="posts">
            { posts.map((post, index) => {
                return(

                    <Post key={ index } post={ post } index={ index } addComment={ addComment }  uploadComment={ uploadComment } />

                )
            } )}
        </section>
    )
}

export default Posts;


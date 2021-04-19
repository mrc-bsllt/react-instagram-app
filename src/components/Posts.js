import "../css/Posts.css";
import Post from "./Post";

const Posts = ({ posts, addComment }) => {
    return (
        <section className="posts">
            { posts.map((post, index) => <Post key={ index } post={ post } index={ index } addComment={ addComment } />) }
        </section>
    )
}

export default Posts;
import "../css/Post.css";
import BottomPost from "./BottomPost";

const Post = ({ post, index }) => {
    return (
        <div className="post">
            <header className="post_header">
                <div className="left">
                    <img src={post.profile_picture} alt={`${post.profile_name}_avatar`} />
                    <h5>{post.profile_name}</h5>
                </div>
                <div className="right">
                    <img src="img/icons/dots.svg" alt="dots" className="dots"/>
                </div>
            </header>

            <section className="post_image_section">
                <img src={post.post_image} alt={`${post.profile_name}_post-img`} className="post_image"/>
            </section>

            <section className="bottom_post_section">
                <BottomPost  post={post} />
            </section>
        </div>
    )
}

export default Post;
import "../css/Post.css";
import BottomPost from "./BottomPost";

const Post = () => {
    return (
        <div className="post">
            <header className="post_header">
                <div className="left">
                    <img src="img/profilo.jpg" alt="user_profile" />
                    <h5>Username del creatore del post</h5>
                </div>
                <div className="right">
                    <img src="img/icons/dots.svg" alt="dots" className="dots"/>
                </div>
            </header>

            <section className="post_image_section">
                <img src="img/test_post.jpg" alt="post_image" className="post_image"/>
            </section>

            <section className="bottom_post_section">
                <BottomPost />
            </section>
        </div>
    )
}

export default Post;
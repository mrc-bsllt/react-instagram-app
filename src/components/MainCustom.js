import "../css/MainCustom.css";
import Carousel from "./Carousel";
import Posts from "./Posts";


const MainCustom = ({ stories, iteration, increaseIndex, decreaseIndex, remainingStories, posts, addComment, isUploading, uploadComment }) => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <Carousel 
                        isUploading={ isUploading }
                        stories={ stories } 
                        iteration={ iteration } 
                        increaseIndex={ increaseIndex } 
                        decreaseIndex={ decreaseIndex } 
                        remainingStories={ remainingStories }
                    />

                    { !isUploading && (
                        <Posts posts={ posts } addComment={ addComment }  uploadComment={ uploadComment } />
                    )}
                </div>

                { !isUploading && (
                    <div className="right">

                        <section className="switch_profile">
                            <div className="left">
                                <img src="img/profilo.jpg" alt="foto_profilo"/>
                            </div>
                            <div className="center">
                                <p>mrc_bsllt</p>
                                <p>Marco Busellato</p>
                            </div>
                            <div className="right">
                                <a className="link" href="#">Passa a</a>
                            </div>
                        </section>

                        <section className="users_tips">
                            <div className="titles">
                                <h3>Suggerimenti per te</h3>
                                <h4>Mostra tutti</h4>
                            </div>

                            <ul className="tips_list">
                                { stories.map((story, index) => {
                                    return(
                                        <li key={ index }>
                                            <div>
                                                <img src={ story.profile_picture } alt="tip_image" className="img_circle img_stndrd" />
                                                <h4>{ story.profile_name }</h4>
                                            </div>
                                            <a className="link" href="#">Segui</a>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </section>

                    </div>
                )}

            </div>
        </main>
    )
}

export default MainCustom;
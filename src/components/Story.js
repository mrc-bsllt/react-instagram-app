import "../css/Story.css";
import TimeBar from "./TimeBar";

const Story = ({ index, story, activeIndexStory, activeStory, stopIntervalStories }) => {

    return (
        <div>
            <div className="story">
                <div className="story_image">
                    <img src={ story.profile_picture } alt={ story.profile_name }  onClick={ () => activeStory(index) } />
                </div>
                <h5>{ `${story.profile_name.substr(0, 8)}...` }</h5>
            </div>

            {  activeIndexStory === index && (

                <div className="show_story">
                    <div className="story_content">
                        <div className="time_bar_container">
                            <TimeBar />
                        </div>

                        <div className="image_container">
                        <img src={ story.story_image } alt="story_picture" />
                        </div>
                    </div>

                    <div className="exit_button">
                        <i className="fas fa-times" onClick={ stopIntervalStories }></i>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Story;

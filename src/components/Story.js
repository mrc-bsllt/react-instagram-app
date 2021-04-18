import "../css/Story.css";

const Story = ({ index, story }) => {

    return (
        <div className="story">
            <div className="story_image">
                <img src={ story.profile_picture } alt={ story.profile_name } />
            </div>
            <h5>{ `${story.profile_name.substr(0, 8)}...` }</h5>
        </div>
    )
}

export default Story;
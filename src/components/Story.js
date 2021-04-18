import "../css/Story.css";

const Story = ( index, story ) => {
    return (
        <div className="story">
            <img src={ story.profile_picture } alt={ story.profile_name } />
            <h5>{ story.profile_name }</h5>
        </div>
    )
}

export default Story;
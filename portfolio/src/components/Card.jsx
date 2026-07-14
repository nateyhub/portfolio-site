import Tag from "./Tag"

export default function Card({ tags, project, handleClick }) {
    const tagItems = tags ? tags.map((tag) => {
        return (
            <Tag key={tag.text} text={tag.text} iconSrc={tag.imgSrc} />
        )
    }) : "";
    return (
        <div className="card" onClick={() => handleClick(project)}>
            <div className="img-holder">
                <img src={project.thumbnail} />
            </div>
            <div className="details">
                <div className="skills-wrapper">
                    {tagItems}
                </div>
                <div>
                    <h1>{project.name}</h1>
                    <p>{project.summary}</p>
                </div>
            </div>
        </div>
    )
}
import Tag from "./Tag"

export default function Card({ tags, imgSrc, projectName, projectSummary, projectDesc, handleClick }) {
    console.log(tags)
    const tagItems = tags ? tags.map((tag) => {
        return (
            <Tag text={tag.text} iconSrc={tag.imgSrc} />
        )
    }) : "";
    return (
        <div className="card" onClick={() => handleClick(projectName)}>
            <div className="img-holder">
                <img src={imgSrc} />
            </div>
            <div className="details">
                <div className="skills-wrapper">
                    {tagItems}
                </div>
                <div>
                    <h1>{projectName}</h1>
                    <p>{projectSummary}</p>
                </div>
            </div>
        </div>
    )
}
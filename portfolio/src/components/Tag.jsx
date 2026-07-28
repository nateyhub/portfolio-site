export default function Tag({ text, iconSrc, type }) {
    const resolvedIcon = iconSrc
        ? new URL(`../assets/tag-icons/${iconSrc}`, import.meta.url).href
        : null

    return (
        <div className={`skill-tag${type ? ` ${type}` : ``}`}>
            {resolvedIcon && <img src={resolvedIcon} />}
            <span>{text}</span>
        </div>
    )
}
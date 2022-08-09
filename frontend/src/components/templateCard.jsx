const TemplateCard = (props) => {
    return(
        <div className="template-card">
                <img src={props.src} alt="template card"/>
                <a href={props.href} className="profile-card">{props.text}</a>
        </div>
    )
}
export default TemplateCard;
const TemplateCard = (props) => {
    return(
        <div className="template-card">
                <img src={props.src} alt="template card"/>
                <p href={props.href} className="profile-card">{props.text}</p>
        </div>
    )
}
export default TemplateCard;
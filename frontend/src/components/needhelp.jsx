const NeedHelp = () => {
    return(
        <div className="help-desk">
            <div className="help-text">
                <div>
                    <h1>What help do you need With your website?</h1>
                </div>
                <div className="message-field">
                    <input type="text" className="message" placeholder="Send us a message"/>
                    <img src={require("../assets/images/send.png")}alt=""/>
                </div>
            </div>
        </div>
    )
}
export default NeedHelp;
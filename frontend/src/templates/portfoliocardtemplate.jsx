import { useState } from "react"
import ButtonCustomization from "../components/templates-customization/buttoncustomization";
import CustomizeIcons from "../components/templates-customization//customizesocialicons";
import ImageCustomization from "../components/templates-customization//imagecustomization";
import TemplateNav from "../components/templates-customization//template-nav";
import TextCustomization from "../components/templates-customization//text-customization";


const PortfolioCard = () => {
    const [textActive, setTextActive] = useState(false)
    const [imageActive, setImageActive] = useState(false)
    const [buttonActive, setButtonActive] = useState(false)
    const [socialActive, setsocialActive] = useState(false)
    const [activeID, setActiveID] = useState("")
    const [backgroundActive , setBackgroundActive] = useState(true)
    const handleTextActive = (e) => {
        setTextActive(true)
        setImageActive(false)
        setButtonActive(false)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleImageActive = (e) => {
        setTextActive(false)
        setImageActive(true)
        setButtonActive(false)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleButtonActive = (e) => {
        setTextActive(false)
        setImageActive(false)
        setButtonActive(true)
        setsocialActive(false)
        setActiveID(e.target.id)
    }
    const handleSocialActive = (e) => {
        setTextActive(false)
        setImageActive(false)
        setButtonActive(false)
        setsocialActive(true)
        setActiveID(e.target.id)
    }
    return(
        <>
            {textActive && <TextCustomization active={activeID} textactive={textActive} settextactive={setTextActive} backgroundactive={backgroundActive} setBackgroundactive={setBackgroundActive}/>}
            {imageActive && <ImageCustomization active={activeID} imageactive={imageActive} setimageactive={setImageActive}/>}
            {buttonActive && <ButtonCustomization active={activeID} buttonactive={buttonActive} setbuttonactive={setButtonActive}/>}
            {socialActive && <CustomizeIcons active={activeID} socialactive={socialActive} setsocialactive={setsocialActive}/>}
                <TemplateNav/>
            <div className="portfolio-card" id="portfolio-card-wrapper" onClick={() => {setBackgroundActive("portfolio-card-wrapper" )}}>
                <div className="portfolio-card-header">
                    <h2 onClick={handleTextActive}id="portfolio-logo">ANNE</h2>
                    <div className="portfolio-card-nav">
                        <h5 onClick={handleTextActive} id="portfolio-card-about">ABOUT</h5>
                        <h5 onClick={handleTextActive} id="portfolio-card-portflio">PORTFOLIO</h5>
                        <button onClick={handleButtonActive} id="portfolio-contact-me">CONTACT ME</button>
                    </div>
                </div>
                <div className="d-flex portfolio-card-main-wrapper">
                    <div className="portfolio-card-main">
                        <h1 onClick={handleTextActive} id="portfolio-card-intro">Hi, I’m Anna Jones</h1>
                        <h6 onClick={handleTextActive} id="portfolio-card-job-description">Product Designer</h6>
                        <p onClick={handleTextActive} id="portfolio-card-job-about">High level experience in user centerd design solving user problem and creating solutions that enhance productivity and growth in businesses throu designs</p>
                        <div className="portfolio-card-icons" onClick={handleSocialActive}>
                            <a id="facebook-icon" href="facebook.com"><img  src={require("../assets/images/big-white-facebook-icon.png")} href="https://www.facebook.com" alt=""/></a>
                            <a id="instagram-icon" href="instagram.com"><img  src={require("../assets/images/big-white-instagram-icon.png")} alt=""/></a>
                            <a  id="twitter-icon" href="twitter.com"><img src={require("../assets/images/big-white-twitter-icon.png")} alt=""/></a>
                            <a id="linkedin-icon" href="linkedin.com"><img src={require("../assets/images/big-white-linkedin-icon.png")} alt=""/></a>
                        </div>
                        <button onClick={handleButtonActive} id="portfolio-card-send-message"className="send-message">Send me a message</button>
                    </div>
                    <div className="portfolio-card-img">
                        <img onClick={handleImageActive} id="portfolio-img-1" src={require('../assets/images/portfolio-card-img.png')} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioCard;
import { useState } from "react";
import ButtonCustomization from "../components/templates-customization/buttoncustomization";
import CustomizeIcons from "../components/templates-customization//customizesocialicons";
import ImageCustomization from "../components/templates-customization//imagecustomization";
import TemplateNav from "../components/templates-customization//template-nav";
import TextCustomization from "../components/templates-customization//text-customization";

const BusinessTemplate = () => {
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
            {textActive && <TextCustomization active={activeID} textstate={textActive} backgroundactive={backgroundActive} setBackgroundactive={setBackgroundActive} settextstate={setTextActive}/>}
            {imageActive && <ImageCustomization active={activeID} imageactive={imageActive} setimageactive={setImageActive}/>}
            {buttonActive && <ButtonCustomization active={activeID} buttonactive={buttonActive} setbuttonactive={setButtonActive}/>}
            {socialActive && <CustomizeIcons active={activeID} socialactive={socialActive} setsocialactive={setsocialActive}/>}
            <TemplateNav/>
            <div className="business-template">
                <div className="business-template-nav" id="business-template-nav" onClick={ () => {setBackgroundActive("business-template-nav")}}>
                    <div className="business-template-nav-logo">
                        <h3 id="business-logo" onClick={handleTextActive}>I-Biz</h3>
                    </div>
                    <div className="business-template-nav-links">
                        <p id="business-nav-home" onClick={handleTextActive}>HOME</p>
                        <p id="business-nav-about" onClick={handleTextActive}>ABOUT</p>
                        <p id="business-nav-team" onClick={handleTextActive}>TEAM</p>
                        <button id="business-contact-us" onClick={handleButtonActive}>CONTACT US</button>
                    </div>
                </div>
                <div className="business-template-top" id="business-template-top" onClick={ () => {setBackgroundActive("business-template-top")}}>
                    <h1 id="business-header-1" onClick={handleTextActive}>Increase you productivity with a framework aid your business growth</h1>
                    <button id="business-request-proposal" onClick={handleButtonActive}>Request for a framework proposal</button>
                </div>
                <div className="business-template-about" id="business-template-about" onClick={ () => {setBackgroundActive("business-template-about" )}}>
                    <div className="business-template--about-text">
                        <h4 onClick={handleTextActive} id="business-who-are-we">WHO WE ARE</h4>
                        <h5 onClick={handleTextActive} id="business-who-are-we-text">Your Business Platform for Performance-Driven and Effective Partner for the Growth you Desire</h5>
                        <h6 onClick={handleTextActive} id="business-what-we-do">I-Biz provides a complete software for managing all aspects of your business and delivering exceptional results.</h6>
                    </div>
                    <div id="business-template-logo-1-wrapper"><img id="business-template-logo-1" onClick={handleImageActive} src={require('../assets/images/business-template-about-img.png')} alt=""/></div>
                </div>
                <div className='business-template-meet-our-team' id="business-template-meet-our-team" onClick={ () => {setBackgroundActive("business-template-meet-our-team")}}>
                    <h3 onClick={handleTextActive} id="business-team">MEET OUR TEAM</h3>
                    <div className="business-template-team-images">
                        <div className="business-template-team-image">
                            <div className="business-meet-our-team"><img onClick={handleImageActive} id="team-member-1" src={require('../assets/images/team-member-1.png')} alt=""/></div> 
                            <h5 onClick={handleTextActive} id="team-member-1-name">JOHN JOSH</h5>
                            <h6 onClick={handleTextActive} id="team-member-1-position">Project Manager</h6>
                        </div>
                        <div className="business-template-team-image">
                            <div className="business-meet-our-team"><img onClick={handleImageActive} id="team-member-2" src={require('../assets/images/team-member-2.png')} alt=""/></div>        
                            <h5 onClick={handleTextActive} id="team-member-2-name">MARY ANN</h5>
                            <h6 onClick={handleTextActive} id="team-member-2-position">Sales Team Lead</h6>
                        </div>
                        <div className="business-template-team-image">
                            <div className="business-meet-our-team"><img onClick={handleImageActive} id="team-member-3" src={require('../assets/images/team-member-3.png')} alt=""/></div>
                            <h5 onClick={handleTextActive} id="team-member-3-name" >CHARLSE JOB</h5>
                            <h6 onClick={handleTextActive} id="team-member-3-position">Chief Operation Officer</h6>
                        </div>
                    </div>
                </div>
                <div className='business-reviews' id="business-reviews" onClick={ () => {setBackgroundActive("business-reviews")}}>
                    <div className="client-reviews">
                        <h4 onClick={handleTextActive} id="client-reviews">Listen to what our clients have to say</h4>
                        <h5 onClick={handleTextActive} id="client-reviews-about">At i-Biz, we work actively to optimize business processes for you to enable compliance with effective regulatory frameworks</h5>
                        <button onClick={handleButtonActive} id="client-reviews-contact-us">Contact Us</button>
                    </div>
                    <div className="clients">
                        <div className="client">
                            <span><img onClick={handleImageActive} id="client-1-img" src={require('../assets/images/review-1.png')} alt=""/></span>
                            <h6 onClick={handleTextActive} id="client-1-name">Ayobami Israel</h6>
                            <p onClick={handleTextActive} id="client-1-description">Lörem ipsum virat tessa tetrare, jag pseudosa respektive renovräkning, även om intrabel dis selfie, föde diling. Heterodining krortad plas plal: plaktig. virat tessa tetrare, jag pseudosa respektive renovräkning, även om intrabel dis selfie, föde diling. Heterodining krortad plas plal: plaktig.</p>
                        </div>
                        <div className="client">
                            <span><img onClick={handleImageActive} id="client-2-img" src={require('../assets/images/review-2.png')} alt=""/></span>
                            <h6 onClick={handleTextActive} id="client-2-name">Joy Israel</h6>
                            <p onClick={handleTextActive} id="client-2-description">Lörem ipsum virat tessa tetrare, jag pseudosa respektive renovräkning, även om intrabel dis selfie, föde diling. Heterodining krortad plas plal: plaktig. virat tessa tetrare, jag pseudosa respektive renovräkning, även om intrabel dis selfie, föde diling. Heterodining krortad plas plal: plaktig.</p>
                        </div>
                    </div>
                </div>
                <div className='business-our-partners' id="business-our-partners" onClick={ () => {setBackgroundActive("business-our-partners")}}>
                    <h4 onClick={handleTextActive} id="business-our-partners">Our Partners</h4>
                    <div className='business-our-partners-main'>
                        <div><img onClick={handleImageActive} id="partner-1-img" src={require("../assets/images/paypal.png")} alt=""/></div>
                        <div><img onClick={handleImageActive} id="partner-2-img" src={require("../assets/images/aws.png")} alt=""/></div>
                        <div><img onClick={handleImageActive} id="partner-3-img" src={require("../assets/images/linkedin.png")} alt=""/></div>
                        <div><img onClick={handleImageActive} id="partner-4-img" src={require("../assets/images/interswitch.png")} alt=""/></div>
                    </div>
                </div>
                <div>
                    <div className="business-stay-in-touch" id="business-stay-in-touch" onClick={ () => {setBackgroundActive("business-stay-in-touch")}}>
                        <h4 onClick={handleTextActive} id="business-stay-in-touch">Stay in touch with our team</h4>
                        <p onClick={handleTextActive} id="business-newsletter">Subscribe to our newsletter which will enable you make effective decisions for you business growth</p>
                        <div>
                            <input type="text" placeholder='Enter your email'/>
                            <button onClick={handleButtonActive} id="business-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="business-footer" id="business-footer" onClick={ () => {setBackgroundActive("business-footer")}}>
                    <h5 onClick={handleTextActive} id="business-address-line-1">I-Biz</h5>
                    <p onClick={handleTextActive} id="business-address-line-2">Tesmot house, Abdulrahman Okene close, </p>
                    <p onClick={handleTextActive} id="business-address-line-3">Victoria Island, Lagos, Nigeria.</p>
                    <p onClick={handleTextActive} id="business-contact">contact@piggyvest.com</p>
                    <p onClick={handleTextActive}  id="business-number">+234 700 933 933 933</p>
                    <div>
                        <span><img onClick={handleSocialActive} id="facebook-icon" src={require("../assets/images/white-facebook-icon.png")} alt=""/></span>
                        <span><img onClick={handleSocialActive} id="instagram-icon" src={require("../assets/images/white-instagram-icon.png")} alt=""/></span>
                        <span><img onClick={handleSocialActive} id="twitter-icon" src={require("../assets/images/white-twitter-icon.png")} alt=""/></span>
                        <span><img onClick={handleSocialActive} id="linkedin-icon" src={require("../assets/images/white-linkedin-icon.png")} alt=""/></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BusinessTemplate;
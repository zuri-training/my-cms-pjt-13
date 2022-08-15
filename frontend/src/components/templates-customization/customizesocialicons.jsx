import { useState } from "react";

const CustomizeIcons = (props) => {
    const [linkedin , setLinkedin] = useState(true)
    const [ facebook , setFacebook] = useState(true)
    const [ twitter , setTwitter] = useState(true)
    const [ instagram , setInstagram] = useState(true)
    const handleDeleteLinkedin = () => {
        document.getElementById('linkedin-icon').style.display = 'none';
        setLinkedin(!linkedin)
    }
    const handleAddLinkedin = () => {
        document.getElementById('linkedin-icon').style.display = 'block';
        setLinkedin(!linkedin)
    }
    const handleDeleteFacebook = () => {
        document.getElementById('facebook-icon').style.display = 'none';
        setFacebook(!facebook)
    }
    const handleAddFacebook = () => {
        document.getElementById('facebook-icon').style.display = 'block';
        setFacebook(!facebook)
    }
    const handleDeleteTwitter = () => {
        document.getElementById('twitter-icon').style.display = 'none';
        setTwitter(!twitter)
    }
    const handleAddTwitter = () => {
        document.getElementById('twitter-icon').style.display = 'block';
        setTwitter(!twitter)
    }
    const handleDeleteInstagram = () => {
        document.getElementById('instagram-icon').style.display = 'none';
        setInstagram(!instagram)
    }
    const handleAddInstagram = () => {
        document.getElementById('instagram-icon').style.display = 'block';
        setInstagram(!instagram)
    }
    // const handleDeleteMail = () => {
    //     document.getElementById('mail-icon').style.display = 'none';
    // }
    const handleLinkedinLink = (e) => {
        document.getElementById('linkedin-icon').setAttribute('href', e.target.value);
    }
    const handleInstagramLink = (e) => {
        document.getElementById('instagram-icon').setAttribute('href', e.target.value);
    }
    const handleTwitterLink = (e) => {
        document.getElementById('twitter-icon').setAttribute('href', e.target.value);
    }
    const handleFacebookLink = (e) => {
        document.getElementById('facebook-icon').setAttribute('href', e.target.value);
    }
    const [left ,setLeft] = useState(false)
    const handleSwitch = () => {
        setLeft(!left)
        if (left === false){
        document.getElementById("customize-icons").style.right = "17px";
        document.getElementById("customize-icons").style.left = "auto";
        }
        else{
            document.getElementById("customize-icons").style.left = "17px";
        }
    }
    const handleClose = () => {
        document.getElementById("customize-icons").style.display = "none";
        props.setsocialactive(false)
    }
    return(
        <div className="customize-icons" id="customize-icons">
            <div className="close-container">
                <h4>You are customizing text</h4>
                <img  onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <h4 id="switch-sides" onClick={handleSwitch}>switch sides</h4>
            <button className="add-social">Add Social</button>
            <div  className="social-wrapper">  
                <h4>Linkedin</h4>
                <div className="social-container">
                    <div><img src={require("../../assets/images/dark-linkedin-icon.png")} alt=""/></div>
                    <input onChange={handleLinkedinLink} placeholder="URL link" />
                    <div>
                        {linkedin && <img  onClick={handleDeleteLinkedin} src={require("../../assets/images/dark-delete-icon.png")}  alt="" />}
                        { linkedin === false && <img  onClick={handleAddLinkedin} src={require("../../assets/images/add-img.png")} className="add-socials-icons" alt="" />}
                    </div>
                </div>
            </div>
            <div  className="social-wrapper">  
                <h4>Facebook</h4>
                <div className="social-container">
                    <div><img src={require("../../assets/images/facebook-icon.png")} alt=""/></div>
                    <input placeholder="URL link" onChange={handleFacebookLink}/>
                    <div>
                        {facebook && <img onClick={handleDeleteFacebook}  src={require("../../assets/images/dark-delete-icon.png")} alt="" />}
                        { facebook === false && <img  onClick={handleAddFacebook} src={require("../../assets/images/add-img.png")} className="add-socials-icons" alt="" />}
                    </div>
                </div>
            </div>
            <div  className="social-wrapper">  
                <h4>Instagram</h4>
                <div className="social-container">
                    <div><img src={require("../../assets/images/instagram-icon.png")} alt=""/></div>
                    <input placeholder="URL link" onChange={handleInstagramLink} />
                    <div>
                        { instagram && <img onClick={handleDeleteInstagram} src={require("../../assets/images/dark-delete-icon.png")} alt="" />}
                        { instagram === false && <img  onClick={handleAddInstagram} src={require("../../assets/images/add-img.png")} className="add-socials-icons" alt="" />}
                    </div>
                </div>
            </div>
            <div  className="social-wrapper">  
                <h4>Twitter</h4>
                <div className="social-container">
                    <div><img src={require("../../assets/images/dark-twitter-icon.png")} alt=""/></div>
                    <input placeholder="URL link" onChange={handleTwitterLink} />
                    <div>
                        { twitter && <img onClick={handleDeleteTwitter} src={require("../../assets/images/dark-delete-icon.png")} alt="" />}
                        { twitter === false && <img  onClick={handleAddTwitter} src={require("../../assets/images/add-img.png")} className="add-socials-icons" alt="" />}
                    </div>
                </div>
            </div>
            {/* <div  className="social-wrapper">  
                <h4>Mail</h4>
                <div className="social-container">
                    <div><img src={require("../../assets/images/mail-icon.png")} alt=""/></div>
                    <input placeholder="URL link" onClick={handleMailLink} />
                    <div>
                        <img onClick={handleDeleteMail} src={require("../../assets/images/dark-delete-icon.png")} alt="" />
                    </div>
                </div>
            </div> */}
            <button onClick={handleClose} className="preview">Preview</button>
        </div>
    )
}
export default CustomizeIcons;
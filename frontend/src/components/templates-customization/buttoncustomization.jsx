import { useState } from "react"

const ButtonCustomization = (props) => {
    const handleClose = () => {
        document.getElementById("customize-button-bar").style.display = "none"
        props.setbuttonactive(false)
    }
    const handleHref= (e) => {
        document.getElementById(props.active).setAttribute("href", e.target.value)
    }
    const handleValue= (e) => {
        document.getElementById(props.active).innerHTML = e.target.value;
    }
    const handleBackgroundColor = (e) => {
            document.getElementById(props.active).style.backgroundColor = e.target.value;
    }
    const [left ,setLeft] = useState(false)
    const handleSwitch = () => {
        setLeft(!left)
        if (left === false){
        document.getElementById("customize-button-bar").style.right = "17px";
        document.getElementById("customize-button-bar").style.left = "auto";
        }
        else{
            document.getElementById("customize-button-bar").style.left = "17px";
        }
    }
    return(
        <div className="customize-button" id="customize-button-bar">
            <div className="close-container">
                <h4>You are customizing Button </h4>
                <img onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt=""/>
            </div>
            <h4 onClick={handleSwitch} id="switch-sides" >switch sides</h4>
            <div>
                <h4>Button Text</h4>
                <input type="text" className="contact-me" onChange={handleValue} placeholder="Type something..."/>
                <p>URL Link  (where do you want this button to direct your users to?)</p>
                <input className="href" type="text" onChange={handleHref} defaultValue="http://asdfghjkk@gmail.com"/>
                <div>
                    <div className="d-flex">
                        <h5>Background Color:</h5>
                        <input type="color" onChange={handleBackgroundColor} defaultValue="#ffffff"/>
                    </div>
                    <div className="d-flex">
                        <h5>or input color hex code:</h5>
                        <input type="text" className="input-color" onChange={handleBackgroundColor} defaultValue="ffffff"/>
                    </div>
                </div>
            </div>
            <button onClick={handleClose} className="preview">Preview</button>
        </div>
    )
}
export default ButtonCustomization;
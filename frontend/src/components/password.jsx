import { useState } from 'react';

const Password = () => {
    const [passwordDisplay, setPasswordDisplay] = useState(false);
    const handlePasswordDisplay = () => {
        setPasswordDisplay(!passwordDisplay);
        PasswordDisplay();
    }
    var passwordField = document.getElementById('password')
    function PasswordDisplay() {
        if ( passwordDisplay === true){
            passwordField.type = "text";
        }
        else {
            passwordField.type="password";
        }
    }

    return(
        <div className="w-100 align-center password">
            <div className="input">
                <input type="password" id="password" placeholder="Enter Password"/>
                <img onClick={handlePasswordDisplay} src={require('../assets/images/view-password-icon.png')} alt=""/>
            </div>
        </div>
    )
}
export default Password;
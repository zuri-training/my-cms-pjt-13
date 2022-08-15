import Button from "../../components/Button";
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return(
        <div className="forgot-password-wrapper">
            <div className="forgot-password-sidebar">
                <img src={require("../../assets/images/Logo.png")} alt="" className="thirtin-logo"/>
                <img src={require("../../assets/images/favicon.png")} alt="" className="coloured-thirtin-logo"/>
            </div>
            <main >
                <div> <Button /> </div>
                <div className="forgot-password-parent">
                    <div className="forgot-password-text">
                        <h3>Forgot Password?</h3>
                        <h4>Enter your email address for password reset process A link will be sent to your mail to reset your password</h4>
                        <div className="w-85 pdt-48">
                            <div>
                                <p>Email</p>
                                <input type="text" placeholder="GabrielIsaac@gmaiil.com"/>
                            </div>
                            <Link to="/account-verify"><input className="submit-forgot-password" type="submit" value="Send Code"/></Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default ForgotPassword;
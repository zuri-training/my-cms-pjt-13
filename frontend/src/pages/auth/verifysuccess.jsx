import { Link } from "react-router-dom"

const VerifySuccess = () => {
    return (
    <div className="verify-success-section">
        <div className="verify-success-sidebar">
            <img src={require("../../assets/images/Logo.png")} alt="thirtin-logo" className="thirtin-logo"/>
            <img src={require("../../assets/images/favicon.png")} alt="thirtin-logo" className="coloured-thirtin-logo"/>
        </div>
        <div className="verify-form-container">
            <div className="verify-form">
                <h2>Verification Successful</h2>
                <div className="success-image">
                    <img src={require("../../assets/images/amico.png")} alt="success" />
               </div>

               <Link to="/login" className="login">Login</Link>
            </div>
        </div>
    </div>
    )
}

export default VerifySuccess;
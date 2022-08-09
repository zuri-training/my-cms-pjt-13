import Password from "../../components/password";

const PasswordResetPage = () => {
    return(
        <div className="password-reset-page-wrapper">
            <div className="forgot-password-sidebar">
                <img src={require("../../assets/images/Logo.png")} alt="" className="thirtin-logo"/>
                <img src={require("../../assets/images/favicon.png")} alt="" className="coloured-thirtin-logo"/>
            </div>
            <div className="mg-auto">
                <div className='password-reset-page-form-wrapper'>
                    <div className='password-reset-page-form'>
                        <h3>Enter New Password</h3>
                        <p>Set a new password to your account and login</p>
                        <div className='password-reset-page-password'>
                            <h6>New Password</h6>
                            <Password/>
                            <h6>Password must contain upper case, Lower case, number and a special character</h6>
                        </div>
                        <div className="mgt-32">
                            <h6>Confirm Password</h6>
                            <Password/>
                        </div>
                        <button>Verify Account</button>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default PasswordResetPage;
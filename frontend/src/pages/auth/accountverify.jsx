const AccountVerify = () => {
    return (
    <div className="account-verify">
        <div className="account-verify-sidebar">
            <img src={require("../../assets/images/Logo.png")} alt="" className="thirtin-logo"/>
            <img src={require("../../assets/images/favicon.png")} alt="" className="coloured-thirtin-logo"/>
        </div>
        <div className="account-verified-container">
            <div className="verify-form">
                <h2>Account Verification</h2>
                <p>A four digit pin has been sent to<span>osi************gmail.com</span>. Kindly input the code below</p>
                <div className="input-container">
                      <input type="text" placeholder="*" />
                     <input type="text" placeholder="*" />
                     <input type="text" placeholder="*" />
                    <input type="text" placeholder="*" />
                </div>
                <input type="submit" id="account-verify-submit" value="Verify Account" />
            </div>
        </div>
    </div>
    )
}

export default AccountVerify;
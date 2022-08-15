import Button from "../../components/Button";

const PasswordResetCode = () => {
  return(
    <div class="password-reset-code">
      <div class="password-reset-code-sidebar">
        <div>
          <img src={require("../../assets/images/Logo.png")} alt="" className="thirtin-logo"/>
          <img src={require("../../assets/images/favicon.png")} alt="" className="coloured-thirtin-logo"/>
        </div>
      </div>
      <div className="container">
        <div className="component-btn"> <Button /> </div>
        <div class="password-reset">  
          <h3>Account Verification</h3>
          <p>A four digit verification code has been sent to olunrebia********@gmail.com. Kindly input the code below</p> 
          <div class="otp-bx">
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
          </div>
          <button className="verifybtn">Verify Code</button>
        </div>
      </div>
  </div>
  )
}
export default PasswordResetCode;
  
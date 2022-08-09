const PasswordResetCode = () => {
  return(
    <div class="password-reset-code">
      <div class="vector">
          <img src={require("../../assets/images/Logo.png")} alt="" className="thirtin-logo"/>
          <img src={require("../../assets/images/favicon.png")} alt="" className="coloured-thirtin-logo"/>
      </div>
      <div class="container">
        <img src={require('../../assets/images/amico.png')} alt="Enter OTP"/>
        <div class="password-reset">  
          <h3>Enter Password Reset Code</h3>
          <p>A four digit password reset code has been sent to olunrebia********@gmail.com. Kindly input the code below</p> 
          <div class="otp-bx">
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
            <input type="text" name="text" id="text" placeholder="*" class="bx"/>
          </div>
          <button>Verify Code</button>
        </div>
      </div>
  </div>
  )
}
export default PasswordResetCode;
  
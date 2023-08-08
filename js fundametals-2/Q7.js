function generateOTP() {
    /*
      Generate a random 4-digit OTP (One-Time Password).
  
      Returns:
        string: The random 4-digit OTP.
    */
    const otpLength = 4;
    let otp = '';
  
    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random() * 10).toString();
    }
  
    return otp;
  }
  
  // Example usage to generate an OTP
  const otp = generateOTP();
  console.log('Your OTP:', otp);
  
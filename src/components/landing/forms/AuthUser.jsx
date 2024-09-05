import { useState } from "react";

function AuthUser() {
  const [currentForm, setCurrentForm] = useState("signIn");

  const switchToSignUp = () => {
    setCurrentForm("signUp");
  };

  const switchToSignIn = () => {
    setCurrentForm("signIn");
  };

  const switchToForgotPassword = () => {
    setCurrentForm("forgotPassword");
  };
                                        //MFETH UNGAKHOHLWA UKULUNGISA ILOADER NAWO CONNECT iDB
  return (
    <div className="auth-page">
      <div className="form-container">
        {currentForm === "signIn" && (
          <>
            <h2>Welcome Back</h2>
            <p id="response">Sign in to continue your journey to finding the perfect home.</p>
            <div id="loader" className="loader"></div>
            <form id="signInForm">
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" autoComplete="on" required />
                <a href="#" onClick={switchToForgotPassword}>Forgotten Password?</a>
              </div>
              <button type="submit" className="auth-btn">Sign in</button>
            </form>
            <p className="switch-auth">Don&apos;t have an account? <a href="#" onClick={switchToSignUp}>Sign up</a></p>
          </>
        )}

        {currentForm === "signUp" && (
          <>
            <h2>Create Your Account</h2>
            <p id="response">Join us and start your journey to homeownership.</p>
            <div id="loader" className="loader"></div>
            <form id="signUpForm">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="full-name" name="name" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" autoComplete="on" required />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" autoComplete="on" required />
              </div>
              <button type="submit" className="auth-btn">Sign up</button>
            </form>
            <p className="switch-auth">Already have an account? <a href="#" onClick={switchToSignIn}>Sign in</a></p>
          </>
        )}

        {currentForm === "forgotPassword" && (
          <>
            <h2>Forgot Your Password?</h2>
            <p id="response">Please input the email you signed up with so we can send you a link to reset your password.</p>
            <div id="loader" className="loader"></div>
            <form id="forgotPasswordForm">
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit" className="auth-btn">Submit</button>
            </form>
            <p className="switch-auth"><a href="#" onClick={switchToSignIn}>Return to Sign In</a></p>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthUser;

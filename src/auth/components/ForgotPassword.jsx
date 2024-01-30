import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Fade } from "react-awesome-reveal";
import forgotPassword from '../../assets/img/Forgot_Password.svg';
import "./ForgotPassword.css";

export const ForgotPassword = () => {

  const {setPage} = useContext(AuthContext);

  return (
    <Fade delay={50}>
      <div className="forgotPassword__container">
        <div className="forgotPassword__left">
          <div className="forgotPassword__card">
            <h3>Forgot Your Password?</h3>
            <p>Please enter the email associated with your account, and we'll assist you in resetting your password.</p>
            <input type="text" placeholder="Enter your email"/>
            <button>Reset Password</button>
            <div className="forgotPassword__loginOrCreateAccount">
              <p>Already have an account? <Link to="/login" className="loginLink" onClick={() => setPage("login")}>Log In</Link> or <Link to="/createAccount" className="loginLink" onClick={() => setPage("createAccount")}>Create Account</Link></p>
            </div>
          </div>
        </div>
        <div className="forgotPasswordPage__right">
          <img src={forgotPassword} alt="Create Account" />
        </div>
      </div>
    </Fade>
  )
}

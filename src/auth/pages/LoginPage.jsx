import { Login, CreateAccount, ForgotPassword  } from '../components';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Fade } from 'react-awesome-reveal';
import './LoginPage.css';

export const LoginPage = () => {

  const {page} = useContext(AuthContext);

  return (
    <Fade delay={50}>
      <div className="login">
        {page=="login" && <Login/>}
        {page=="createAccount" && <CreateAccount/>}
        {page=="recoverPass" && <ForgotPassword/>}
      </div>
    </Fade>
  )
}

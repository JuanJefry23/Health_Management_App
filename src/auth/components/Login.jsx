import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import loginImage from '../../assets/img/Login_Image.svg';
import logo from '../../assets/img/Patient_Care_Logo_Editado.png';
import googleIcon from '../../assets/img/Google_Icon.png';

export const Login = () => {
    
    const {setPage} = useContext(AuthContext);

    return (
        <>
            <div className="loginPage__left">
                <div className="loginPage__left__container">
                    <Link to="/">
                        <img src={logo} alt="PatientCare" />
                    </Link>
                    <div className="loginPage__leftFirst">
                        <h1>Login</h1>
                        <p>New to Patient Care? <small><Link to="/createAccount" className="loginLink" onClick={() => setPage("createAccount")}>Create an account</Link></small> </p>
                        <small>Email</small>
                        <input type="text" placeholder="Enter Email Address"/>
                        <small>Password</small>
                        <input type="text" placeholder="Enter Password"/>
                    </div>
                    <div className="loginPage__leftSecond">
                        <input type="checkbox" />
                        <p>Remember Password</p>
                        <p><Link to="/recoverPass" className="loginLink" onClick={() => setPage("recoverPass")}>Forgot password</Link></p>
                    </div>
                    <div className="loginPage__leftThird">
                    <Link to="/app" className="linkToLogin"><button>LOGIN</button></Link>
                        <button>
                            <div><img src={googleIcon} alt="Google login" /><p>Login with Google</p></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="loginPage__right">
                <img src={loginImage} alt="Login page" />
            </div>
        </>
    )
}

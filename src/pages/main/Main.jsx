import {useContext, useRef} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineManageAccounts, MdOutlineTipsAndUpdates, MdOutlineDesignServices } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { BsGear } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import mainImage from '../../assets/img/Main_Image.svg';
import logo from '../../assets/img/Patient_Care_Logo.png';
import playStoreLogo from '../../assets/img/Google_Play_Store.svg';
import appStoreAppleLogo from '../../assets/img/App_Store_Apple_Logo.svg';
import socialProof from '../../assets/img/Social_Proof.png';
import bestManagementAppImg from '../../assets/img/Best_Management_App_Image.svg';
import './Main.css';


export const Main = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log(navRef.current.hidden);  
  }

  const {setPage} = useContext(AuthContext);

  return (
    <>
      <div className="container">

        {/* RESPONSIVE NAVBAR SECTION */}
        <header className="header">
          <img src={logo} alt="Logo Image" />
          <nav ref={navRef} >
            <a className="header__nav__link" href="#benefits">Benefits</a>
            <a className="header__nav__link" href="#features">Features</a>
            <a className="header__nav__link" href="#app">App</a>
            <Link to="/login" className="link" onClick={() => setPage("login")}>
              <a className="header__nav__link header__nav__login" href="">Login</a>
            </Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <AiOutlineClose />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <GiHamburgerMenu />
          </button>
        </header>
        <hr />
        {/*MAIN SECTION, WHERE IT WILL BE PLACED THE TITLE, SUBTITLE, SOCIAL
          PROVE AND THE MAIN IMAGE RELATED TO THE APP*/}
        <main className="main">
          <div className="main__left">
            <h1>Manage all of your patients using Patient Care</h1>
            <p className='main__left__parragraph'>Still looking for the perfect app to manage your staff?</p>
            <p className='main__left__parragraph'>Patient Care might just be the perfect tool for the job</p>
            
            <img className='main__left__stores' src={appStoreAppleLogo} alt="App Store Logo" />
            <img className='main__left__stores' src={playStoreLogo} alt="Google Play Logo" />
            <div className="main__left__socialProof">
              <img src={socialProof} alt="Social Proof" />
              <div>10M+ USERS</div>
            </div>            
          </div>
          <div className="main__right" >
            <img src={mainImage} alt="Patients management image" />
          </div>
        </main>

        {/* SECTION OF ALL THE ADVANTAGES - ICONS */}
        <Fade delay={270}>
          <section className="section__benefits" id="benefits">
            <p>Save time, improve management and ensure efficiency</p>
            <div>
              <AiOutlineFieldTime className="section__icons"/>
              <MdOutlineTipsAndUpdates className="section__icons"/>
              <MdOutlineManageAccounts className="section__icons"/>
            </div>
          </section>
        </Fade>

        {/* SECTION CARDS WITH FEATURES */}
        <Fade delay={270}>
          <section className="section__cards" id="features">
            <h3>Awesome features</h3>
            <div className="section__cards__container">
              <div className="section__cards__containerCard">
                <h4>UNIQUE DESIGN</h4>
                <p>In our patient management app, "Unique Design" takes center stage.
                   Tailored interfaces and intuitive navigation redefine user experience. Every feature reflects thoughtful,
                   user-centric design principles. This distinctive approach ensures unparalleled ease of use and efficiency.
                   With innovation at its core, our app pioneers a future where healthcare management is as intuitive as it is effective.
                </p>
                <MdOutlineDesignServices className="section__cards__container__icon"/>
              </div>
              <div className="section__cards__containerCard" >
                <h4>EFFICIENCY FIRST</h4>
                <p>All the principals features to make your day easy and your work fast and efficient in one app.
                   Streamlined workflows, intelligent automation, and seamless interfaces empower timely, informed care.
                   Administrative tasks integrate effortlessly, allowing focused attention on patients. Embracing cutting-edge
                   tech ensures secure, advanced solutions to give the most intuitive interface to all the users.
                </p>
                <GoGoal className="section__cards__container__icon" />
              </div>
              <div className="section__cards__containerCard" >
                <h4>UNLIMITED FEATURES</h4>
                <p>Our patient management app boasts "Unlimited Features," setting it apart from the rest. With a rich array of functionalities,
                   it adapts to diverse healthcare needs seamlessly. From comprehensive analytics to customizable workflows, every tool empowers
                   providers to deliver exceptional care. This boundless approach propels healthcare management into a realm potential and flexibility.
                </p>
                <BsGear className="section__cards__container__icon" />
              </div>
            </div>
          </section>
        </Fade>

        {/* BEST MANAGEMENT APP SECTION */}
        <Fade delay={270}>
          <section className="bestMobileApp" id="app">
            <div className="bestMobileApp__left" >
              <h4>Best Management <br/>App</h4>
              <p>
                Discover the ultimate Management app! Streamline tasks, boost productivity,
                and simplify collaboration with our sleek, intuitive interface. Stay organized,
                track progress, and make informed decisions effortlessly. Elevate your efficiency
                with the best Management app available.
              </p>
              <p>✔ Responsive Design</p>
              <p>✔ Easy to Customize</p>
              <p>✔ Modern Design</p>
            </div>
            <div className="bestMobileApp__right" >
              <img src={bestManagementAppImg} alt="Best Management App" />
            </div>
          </section>
        </Fade>

        <Fade delay={270}>
          <hr />
          <footer className="footer">
            <div className="footer__left">
              <h5>What are you waiting?</h5>
              <p>Join to the million of users of the platform, who are saving time and improving their services.</p>
            </div>
            <div className="footer__middle">
              <h5>Product</h5>
              <a href="#"><p>Login</p></a>
              <a href="#"><p>Pricing</p></a>
              <a href="#"><p>Terms of Service</p></a>
            </div>
            <div className="footer__right">
              <h5>Contact Us</h5>
              <p>ortega.frontdev@gmail.com</p>
              <p>+541136247157</p>
            </div>
          </footer>
        </Fade>

      </div>
    </>
  )
}

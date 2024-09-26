
import React from "react";
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import style from './NavBar.module.css'
// import influencer_logo from '../../Images/influencer_logo.png';
import { Influencer_logo } from "../../asstes";

const NavBar = () => {
  // const location = useLocation();


  return (
    <>
    <div>
      <Navbar expand="lg" className="bg-body-tertiary py-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Influencer_logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="responsive-navbar-nav justify-content-end">
            {'LoginHomePage' === '/MyProject'  || '/MyProject' === '/MyProject' || '/ActiveInfluencer' === '/ActiveInfluencer' || '/RequestPage' === '/RequestPage' || '/MyProfile' === '/MyProfile' || '/Membership' === '/Membership' ? (
              <>
                <div className="mx-auto d-inline-flex">
                  <Nav className={`mx-2 ${style.navbar_link_hover} text-dark`}  to="/LoginHomePage" data-aos="zoom-out-right" data-aos-delay="200" data-aos-duration="2000" data-aos-easing="ease-in-back">Home</Nav>
                  <Nav className={`mx-2 ${style.navbar_link_hover} text-dark`}  to="/MyProject" data-aos="zoom-out-right" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-back">Fifth Link</Nav>
                </div>

                <a href="/logout" className={`${style.nav_login_btn} text-decoration-none text-light`} >
                 Logout
                </a>
                <Nav className={`mx-4 ${style.navbar_profile} text-dark d-flex align-items-center`} to="/MyProfile">
                  <div className="mx-2 text-center">
                    <h6>Mohomad</h6>
                    <span>Mohomad@gmail.com</span>
                  </div>
                  <img src={''} alt="Profile" className={style.user_profile_img} />
                </Nav>
              </>
            ) : (
              <>
                <Nav className={`mx-4 ${style.navbar_link_hover} text-dark`}  to="/" data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="3000" data-aos-easing="ease-in-back">Home</Nav>
                <Nav  className={`mx-4 ${style.navbar_link_hover} text-dark`}  to="/Agency" data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="2000" data-aos-easing="ease-in-back">Agency</Nav>
                <Nav className={`mx-4 ${style.navbar_link_hover} text-dark`}  to="/SignupInfluencer" data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-in-back">Influencer</Nav>
                <Nav className={`mx-4 ${style.navbar_link_hover} text-dark`}  to="/about" data-aos="zoom-out-right" data-aos-delay="300" data-aos-duration="500" data-aos-easing="ease-in-back">About Us</Nav>
                <a  className={`${style.nav_login_btn} text-decoration-none text-light`}  href='/signin' data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">Logout</a>
              </>
            )}
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </div>
    <Outlet/>
    </>
  );
}

export default NavBar;


 
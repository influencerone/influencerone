import React from "react";
import style from '../registration_page/style/Login.module.css'
import { Loginimg } from "../../asstes";
import { Container, Row, Col } from "react-bootstrap";


const SignupInfluencer = () => {


  return (
    <Container>
    <Row style={{ height: "100vh" }}>
      <Col md={8} className=" m-auto">
        <Row>
          <Col md={6} className="m-auto  ">
            <div className={`${style.influencer_login_form} p-5 `}>
              <form>
                <h2 className="pb-3">Signup</h2>
                <div>
                  <label>
                    <b>Company Name</b>
                  </label>
                  <input type="text" name="email" />
                </div>
                <div>
                  <label>
                    <b>Name</b>
                  </label>
                  <input type="text" name="email" />
                </div>
                <div>
                  <label>
                    <b>Email</b>
                  </label>
                  <input type="text" name="email" />
                </div>
                <div className="mt-3">
                  <label>
                    <b>Password</b>
                  </label>
                  <input type="password" name="password" />
                </div>
                <button type="submit" className={`${style.login_btn} mt-5`}>
                   Sign
                </button>
                <br />
                <br />
              </form>
              <p className="text-muted text-center">
              Already have a Account?<span className={style.blueColor}>Login</span>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={style.influencer_login_form_img}>
              <img src={Loginimg} alt="#"/>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );
};

export default SignupInfluencer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Loginimg } from "../../asstes";
import style from "../registration_page/style/Login.module.css";
const LoginInfluencer = () => {

  return (
    <Container>
      <Row style={{ height: "100vh" }}>
        <Col md={8} className=" m-auto">
          <Row>
            <Col md={6} className="m-auto  ">
              <div className={`${style.influencer_login_form} p-5 `}>
                <form>
                  <h2 className="pb-3">Login</h2>
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
                  <a type="submit" href="/deshboard" className={`${style.login_btn} mt-5`}>
                    Login
                  </a>
                  <br />
                  <br />
                </form>
                <p className="text-muted text-center">
                Dont have an account ?<span className={style.blueColor}> Sign up here</span>
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
export default LoginInfluencer;

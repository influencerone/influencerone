import React, { useState } from 'react';
import card_img from '../../Images/card_img.png';
import card_profile_img from '../../Images/card_profile_img.png';
import post_img from '../../Images/post_img.png';
import story_img from '../../Images/story_img.png';
import reel_img from '../../Images/reel_img.png';
import dialog_box_img from '../../Images/success_dialog_box_img.png';
import { Container, Row, Col } from 'react-bootstrap';

import style from './CardProfile.module.css';

const CardProfile = () => {
  const [active, setActive] = useState(false);

  const closeItem = () => {
    setActive(false);
  };
  const openItem = () => {
    setActive(true);
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <div className="d-flex align-items-center" style={{ height: '100%' }}>
              <div className={style.card_profile}>
                <div className="d-flex my-4 px-3">
                  <div>
                    <img src={card_profile_img} className={style.card_profile_img} alt="Profile" />
                  </div>
                  <div className="px-3 pt-3">
                    <h5>Alexa Rawles</h5>
                    <p className="text-muted">alexarawles@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-4 px-3" style={{ color: '#2C3E50' }}>
                  <div>
                    <h5>340</h5>
                    <span>Post</span>
                  </div>
                  <div>
                    <h5>54k</h5>
                    <span>Follower</span>
                  </div>
                  <div>
                    <h5>289</h5>
                    <span>Following</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div>
              <img className={style.card_img} src={card_img} alt="Card" />
            </div>
          </Col>
        </Row>
      </Container>

      <section className="my-5">
        <Container>
          <h2>Services Details</h2>
          <div className="border border-success rounded">
            <Row className="px-5 pt-5">
              <Col md={10}>
                <div className="d-flex">
                  <div>
                    <img src={post_img} alt="Post" />
                  </div>
                  <div className="mt-3 mx-4">
                    <h4>Post</h4>
                    <p className="text-muted">
                      2 post with the products and how to use product with caption and promo code
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div className={`${style.service_details} d-flex justify-content-between mt-3 mx-4`}>
                  <h4>$100</h4>
                  <input type="checkbox" className="border-success w-50 bg-success" />
                </div>
              </Col>
            </Row>
            <Row className="px-5 pt-5">
              <Col md={10}>
                <div className="d-flex">
                  <div>
                    <img src={reel_img} alt="Reel" />
                  </div>
                  <div className="mt-3 mx-4">
                    <h4>Reel</h4>
                    <p className="text-muted">
                      1 reel with the products and how to use product with caption and promo code
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div className={`d-flex justify-content-between mt-3 mx-4 ${style.service_details}`}>
                  <h4>$150</h4>
                  <input type="checkbox" className="border-success w-50 bg-success" />
                </div>
              </Col>
            </Row>
            <Row className="p-5">
              <Col md={10}>
                <div className="d-flex">
                  <div>
                    <img src={story_img} alt="Story" />
                  </div>
                  <div className="mt-3 mx-4">
                    <h4>Story</h4>
                    <p className="text-muted">Alternated day 1 story with promo code</p>
                  </div>
                </div>
              </Col>
              <Col md={2}>
                <div className={`d-flex justify-content-between mt-3 mx-4 ${style.service_details}`}>
                  <h4>$29</h4>
                  <input type="checkbox" className="border-success w-50 bg-success" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <h2>About</h2>
          <div className="about_text border-success border rounded p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas ut, enim
              accusantium cumque possimus sequi quisquam assumenda! Odio nesciunt nulla eius quia
              est laborum eaque doloremque ipsa nihil numquam.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <div className="my-5 text-center">
          <button className={style.request_btn} onClick={openItem}>
            Request
          </button>
          {active && (
            <div className={style.dialog_overlay}>
              <div className={style.dialog_box}>
                <div className={style.dialog_content}>
                  <div className={style.dialog_icon}>
                    <img src={dialog_box_img} alt="Success" />
                  </div>
                  <p>Your request has been submitted</p>
                </div>
                <button className={style.dialog_close_button} onClick={closeItem}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CardProfile;

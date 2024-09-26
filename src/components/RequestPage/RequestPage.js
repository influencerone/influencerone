
import React , {useState} from 'react'
import card_profile_img from '../../Images/card_profile_img.png'
import post_img from '../../Images/post_img.png'
import reel_img from '../../Images/reel_img.png'
import { Container ,Row ,Col } from 'react-bootstrap'

import style from './Request.module.css'
import MyProject from '../MyProject/MyProject'

const RequestPage=()=> {

  const [filter, setFilter] = useState('All');

  const requests = [
      {
          name: 'Alexa Rawles',
          email: 'alexarawles@gmail.com',
          posts: 340,
          followers: '54k',
          following: 289,
          offer: 'Offer $279',
          status: 'Requested',
      },
      {
          name: 'Alexa Rawles',
          email: 'alexarawles@gmail.com',
          posts: 340,
          followers: '54k',
          following: 289,
          offer: 'Offer $279',
          status: 'Approved',

          
      },
      {
          name: 'Alexa Rawles',
          email: 'alexarawles@gmail.com',
          posts: 340,
          followers: '54k',
          following: 289,
          offer: 'Offer $279',
          status: 'Approved',

      },
      {
          name: 'Alexa Rawles',
          email: 'alexarawles@gmail.com',
          posts: 340,
          followers: '54k',
          following: 289,
          offer: 'Offer $279',
          status: 'Rejected',
      },
  ];
  const filteredRequests = requests.filter(request => filter === 'All' || request.status === filter)  ;
return (
  <div>
    <MyProject />

    <section>
      <Container>
        <Row className="my-5">
          <div className={style.tabs}>
            <button
              className={`${style.tab} ${
                filter === "All" ? style.active : ""
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`${style.tab} ${
                filter === "Approved" ? style.active : ""
              }`}
              onClick={() => setFilter("Approved")}
            >
              Approved
            </button>
            <button
              className={`${style.tab} ${
                filter === "Rejected" ? style.active : ""
              }`}
              onClick={() => setFilter("Rejected")}
            >
              Rejected
            </button>
          </div>
        </Row>
        <Row className="my-5">
          <div className="col-md">
            <div className={style.active_influencer_card_sec}>
              {filteredRequests.map((request, index) => (
                <div className={style.request_card} key={index}>
                  <Row>
                    <div className={style.request_card_header}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              src={card_profile_img}
                              alt={request.name}
                              className={style.profile_pic}
                            />
                          </div>
                          <div className="px-3">
                            <h6 className=" ">
                              <strong>{request.name}</strong>
                            </h6>
                            <span>{request.email}</span>
                          </div>
                        </div>
                        {request.status === "Approved" && (
                          <span className={style.offer}>{request.offer} </span>
                        )}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div
                      className="card_stats d-flex justify-content-between"
                      style={{ color: "#2C3E50" }}
                    >
                      <div>
                        <h4>{request.posts}</h4>
                        <p>Post</p>
                      </div>
                      <div>
                        <h4>{request.followers}</h4>
                        <p>followers</p>
                      </div>
                      <div>
                        <h4>{request.following}</h4>
                        <p>following</p>
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className={style.card_content}>
                      <Row className="py-3">
                        <Col md={10}>
                          <div className="d-flex">
                            <div>
                              <img src={post_img}  alt='' />
                            </div>
                            <div className="mt-2 mx-2">
                              <h4>Post</h4>
                              <p>
                                2 post with the products and how to use product
                                with caption and promo code
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-3">
                        <Col md={10}>
                          <div className="d-flex">
                            <div>
                              <img src={reel_img}  alt='' />
                            </div>
                            <div className="mt-2 mx-2">
                              <h4>Reel</h4>
                              <p>
                                1 reel with the products and how to use product
                                with caption and promo code
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Row>

                  <Row className="">
                    <div className={style.request_card_footer}>
                      {request.status === "Rejected" && (
                        <span className={style.offer}>{request.offer} </span>
                      )}
                      {request.status === "Requested" && (
                        <span className={style.offer}>{request.offer} </span>
                      )}
                      <button
                        className={`${style.status_button} ${
                          style[request.status.toLowerCase()]
                        }`}
                      >
                        {request.status}
                      </button>
                      {request.status === "Approved" && (
                        <button className={style.add_funds_button}>Pay</button>
                      )}
                    </div>
                  </Row>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  </div>
);
}
export default RequestPage;


 

import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';


// import notification_icon from '../Images/dashboard_icon/notification_icon.png'
// import card_profile_img from'../Images/card_profile_img.png'
// import influencer_request_img from '../../Images/influencer_request_img.png'
// import influencer_request_reel_icon from '../../Images/influencer_request_icon/influencer_request_reel_icon.png'
// import influencer_request_story_icon from '../../Images/influencer_request_icon/influencer_request_story_icon.png'
// import influencer_request_story2_icon from '../../Images/influencer_request_icon/influencer_request_story2_icon.png'

import style from './Request.module.css'

const InfluencerRequest=({userInfluencer})=> {
    const cardArrray =['','','','']

   
  return (
    <div>
       
       
          <Container>

                <Row className="">
                {cardArrray.map((card,index) =>(
                <Col lg={6}>

                <div className={`${style.organizer_card} p-4 mb-4`}>
                    <div className={`${style.organizer_card_header} d-flex justify-content-between`}>
                      <div className={style.organizer_info}>
                        <h3>Organizer</h3>
                        <span className='text-muted'>Manager Name</span>
                      </div>
                      <div className={style.organizer_logo}>
                        <img src={''} alt="Organizer Logo" cl />
                      </div>
                    </div>
                    <div>
                      <div className=" py-4 border-bottom">
                        <Row>
                            <div className='col-2 '>
                                <div className={style.request_item_img}>
                                    <img src={''}  alt='' />
                                </div>
                            </div>
                            <div className='col-10'>
                                <h3  >Reel</h3>
                                <span className='text-muted' >Campine Details and product name</span>
                                <div className='d-flex justify-content-between'>
                                    <h5  >$50.5</h5>
                                    <h6 className="px-4">Qty: 4</h6>
                                </div>
                            </div>
                        </Row>
                      </div>
                      <div className="  py-4 border-bottom">
                        <Row>
                            <div className='col-2 '>
                                <div className={style.request_item_img}>
                                    <img src={''} alt=''  />
                                </div>
                            </div>
                            <div className='col-10'>
                                <h4  >Sotry</h4>
                                <span className='text-muted' >Campine Details and product name</span>
                                <div className='d-flex justify-content-between'>
                                    <h5  >$50.5</h5>
                                    <h6 className="px-4">Qty: 4</h6>
                                </div>
                            </div>
                        </Row>
                      </div>
                      <div className="  py-4 border-bottom">
                         <Row>
                            <div className='col-2 '>
                                <div className={style.request_item_img}>
                                    <img src={''} alt=''  />
                                </div>
                            </div>
                            <div className='col-10'>
                                <h4 >Story</h4>
                                <span className='text-muted' >Campine Details and product name</span>
                                <div className='d-flex justify-content-between'>
                                    <h5  >$50.5</h5>
                                    <h6  className="px-4">Qty: 4</h6>
                                </div>
                            </div>
                        </Row>
                      </div>
                    </div>
                    <div className=" pt-4 d-flex justify-content-between  align-items-center  ">
                        <div>
                            <span className='text-muted'>Total</span>
                            <h5>$50.5</h5>
                        </div>
                      <div  className='d-flex'>
                        <button className={style.accept_btn}>✔</button>
                        <button className={style.decline_btn}>✘</button>
                      </div>
                      
                      <span  className={style.arrow_btn}>&#x0350;</span>
                    </div>
                  </div>
                </Col>

                ))}
              </Row>                
              
          </Container>
    </div>
  )
}

export default InfluencerRequest

 

 

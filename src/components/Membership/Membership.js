import React, { useState } from 'react'
import { Col, Container ,Row  } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import MyProject from '../MyProject/MyProject';

function Membership() {

    // start subscription Pack   select code 

    const subscriptionPack = [
     
        {  startingDate: "01/01/2024", endingDate: "01/08/2024", expiryDate: "01/06/2024" },
        { status: 'Expired Subscription' ,startingDate: "01/01/2024", endingDate: "01/08/2024" ,expiryDate: "01/06/2024"},
        { status: 'Expired Subscription' ,startingDate: "01/01/2024", endingDate: "01/08/2024" ,expiryDate: "01/06/2024"},
         

    ];
    

    // end subscription Pack   select code 


    // start plans select code 
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigate = useNavigate()


    const plans = [
        {
            duration: "1 month",
            price: "$500",
            benefits: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]
        },
        {
            duration: "6 month",
            price: "$2000",
            benefits: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]
        }
    ];
    const handleSelectPlan = (index) => {
        setSelectedPlan(index);
    };

    const handlePayButtonClick = () => {
        if (selectedPlan !== null) {
          navigate("/AddCard", { state: plans[selectedPlan] });
        }
      };
    // end plans select code 


  return ( 
    <div>
        <MyProject/>
        
        <Container>
            <Row className='my-5'>
                <h2>Membership</h2>
            </Row>
            <Row>
                {plans.map((plan, index) => (
                <Col sm={6} md={5} xl={4} key={index} className="mb-4">
                    <div className={`p-4 plans_info ${selectedPlan === index ? 'selected' : ''}`} onClick={() => handleSelectPlan(index)} style={{ cursor: 'pointer' }}>
                    <input type="radio" checked={selectedPlan === index}
                        style={{ display: 'none' }}
                        readOnly />
                    <span className="membership_radio_mark"></span>
                    <h5 className='plans_month text-center'>{plan.duration}</h5>
                    <h2 className='text-center mb-4'>{plan.price}</h2>
                    <ul className="list-unstyled">
                        {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="my-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {benefit}
                        </li>
                        ))}
                    </ul>
                    <div className=' mt-5 text-center'>
                        <button className="pay_btn w-50" onClick={() => handlePayButtonClick(index)}
                        disabled={selectedPlan !== index}
                        >Pay</button>
                    </div>

                    </div>
                </Col>
                ))}
            </Row>
            
         
            <Row className='my-5' > 
                <h2>Subscription History</h2>
                <Col md={6}>
                    {subscriptionPack.map((request, index) => (     
                        <div className='membership_card p-5 my-3 '   >
                            <div className='d-flex justify-content-between'>
                                <h3>Subscription</h3>
                                {request.expiryDate && 
                                <h6 className='expired_text'>{request.status} </h6>
                                }
                            </div>
                        
                            <div className='d-flex align-items-center py-2'><h2>$500 </h2><span className='subscription_month'> /month</span></div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-center  align-items-center  '>
                                    <h6><strong>Starting Date </strong>{request.startingDate}</h6> 
                                </div>
                                <div className='d-flex'>
                                {request.status === "Expired Subscription" ? 
                                <h6><strong>Ending Date</strong> {request.expiryDate}</h6> 
                                :
                                <h6><strong>Ending Date</strong> {request.endingDate}</h6> 
                                }
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>  
            </Row>
           
              
            
        </Container>
    </div>
  )
}

export default Membership
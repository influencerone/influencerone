import React, { useEffect, useRef, useState } from 'react';

import { Container, Row, Col} from 'react-bootstrap';

// import influencer_request_img from '../../Images/influencer_request_img.png';
// import influencer_request_reel_icon from '../../Images/influencer_request_icon/influencer_request_reel_icon.png';
// import influencer_request_story_icon from '../../Images/influencer_request_icon/influencer_request_story_icon.png';
// import influencer_request_story2_icon from '../../Images/influencer_request_icon/influencer_request_story2_icon.png';

import style from './Project.module.css';

function InfluencerProject() {
  // const navigate = useNavigate();

  const activeProjects = ['','','',''];

  const rejectedProjects = [
    { title: 'Rejected Project 1', description: 'Description of rejected project 1' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState('Active Project');
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedProjectType(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  

  return (
      <section className="section">
        <Container>
        
          <div className={style.dropdown} ref={dropdownRef}>
            <div className={`${style.project_toggle} py-2 px-3`} onClick={handleToggleDropdown}>
              {selectedProjectType} {selectedProjectType === 'Active Project' && '▼ '  } {selectedProjectType === 'Rejected Project' && '▼' }
            </div>
            {isOpen && (
              <div className={`${style.project_manu} p-3`}>
                <div className={`${style.project_item} d-flex align-itmes-center`} onClick={() => handleOptionClick('Active Project')}>
                 <input type='radio' 
                 checked={selectedProjectType === 'Active Project'} 
                 readOnly
                 style={{ display: 'none' }}
                 /> 
                  <span className={style.radio_mark}></span>
                   Active Project
                </div>
                <div className={`${style.project_item} d-flex align-itmes-center`} onClick={() => handleOptionClick('Rejected Project')}>
                <input type='radio'
                 checked={selectedProjectType === 'Rejected Project'}
                 readOnly
                 style={{ display: 'none' }}
                 /> 
                 <span className={style.radio_mark}></span>
                   Rejected Project
                </div>
              

              </div>
              
            )}
          </div>
          <Row>
            {selectedProjectType === "Active Project" &&  (
                activeProjects.map((project, index) => (
                        <Col lg={6}>

                        <div className={`${style.organizer_card} p-4 mt-4`}>
                            <div className={`${style.organizer_card_header}  d-flex justify-content-between`}>
                            <div className={style.organizer_info}>
                                <h3>Organizer</h3>
                                <span className='text-muted'>Manager Name</span>
                            </div>
                            <div className={style.project_logo}>
                                <img src={''} alt="Organizer Logo" cl />
                            </div>
                            </div>
                            <div>
                            <div className=" py-4 border-bottom">
                                <Row>
                                    <div className='col-2 '>
                                        <div className={style.request_item_img}>
                                            <img src={''} alt=''/>
                                        </div>
                                    </div>
                                    <div className='col-10'>
                                        <h3  >Reel</h3>
                                        <span className='text-muted'>Campine Details and product name</span>
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
                                            <img src={''}  alt=''/>
                                        </div>
                                    </div>
                                    <div className='col-10'>
                                        <h4  >Sotry</h4>
                                        <span className='text-muted'>Campine Details and product name</span>
                                        <div className='d-flex justify-content-between'>
                                            <h5  >$50.5</h5>
                                            <h6  className="px-4">Qty: 4</h6>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className="  py-4 border-bottom">
                                <Row>
                                    <div className='col-2 '>
                                        <div className={style.project_item_img}>
                                            <img src={''} alt='#' />
                                        </div>
                                    </div>
                                    <div className='col-10'>
                                        <h4 >Story</h4>
                                        <span className='text-muted'>Campine Details and product name</span>
                                        <div className='d-flex justify-content-between'>
                                            <h5  >$50.5</h5>
                                            <h6  className="px-4">Qty: 4</h6>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            </div>
                            <div className={`${style.project_item}  d-flex justify-content-between align-items-center `}>
                                <div>
                                    <span className='text-muted'>Total</span>
                                    <h5>$50.5</h5>
                                </div>
                            <div  >
                                <button className={style.view_details_btn} >View Details</button>
                            </div>
                            </div>
                        </div>
                        </Col>

                ))
            )}
            {selectedProjectType === 'Rejected Project' && (
                rejectedProjects.map((project, index) => (
                <h1>Rejected Project</h1>
                ))
            )}
        </Row>
        </Container>
      </section>
  );
}

 

export default InfluencerProject;

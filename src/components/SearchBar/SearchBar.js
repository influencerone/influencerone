import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import NavBar from '../../CommonPages/NavBar/NavBar';

import style from './Search.module.css'

import card_img from '../../Images/card_img.png';
import card_profile_img from '../../Images/card_profile_img.png';
import filter_img from '../../Images/Filter.png';

const SearchBar = () => {
  const cardArray = new Array(12).fill('');
  // const cardArray = ['','']
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
 

  // State for range values
  const [minRangeValue, setMinRangeValue] = useState(0);
  const [maxRangeValue, setMaxRangeValue] = useState(100000000); // Up to 100M
  const [budget, setBudget] = useState(2000);

  const handleMinRangeChange = (e) => {
    setMinRangeValue(e.target.value);
  };

  const handleMaxRangeChange = (e) => {
    setMaxRangeValue(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  // Format range value
  const formatRangeValue = (value) => {
    if (value >= 1000000) return `${Math.floor(value / 1000000)}m`;
    if (value >= 1000) return `${Math.floor(value / 1000)}k`;
    return value;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <NavBar
        secondLinkName='Agency'
        thirdLinkName='Influencer'
        fourthLinkName='About Us'
        btn='Get Started'
        visit='/FindInfluencerPage'
      />
      <section>
        <Container>
          <Row className='mt-5'>
            <Col md={10}>
              <div className={`${style.search_and_btn} border`}>
                <input type='text' placeholder='Search...' />
                <button><i className="fa fa-search"></i></button>
              </div>
            </Col>
            <Col md={2} className='mr-auto'>
              <div className={style.filter_btn} ref={dropdownRef}>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <img src={filter_img} alt='Filter' />
                </button>
                {isOpen && (
                  <div className={style.drop_down_sec} >
                    <div className={`${style.drop_down_opt} pb-3`}>
                      <div onClick={() => toggleDropdown('Niche')} className='d-flex justify-content-between '>
                        <h4 className=''>Niche  
                        </h4>
                        {openDropdown === 'Niche' ? '▲'  : '▼'}
                      </div>
                      {openDropdown === 'Niche' && (
                        <ul>
                          {['Music & Dance', 'Beauty & Fashion', 'Fitness & Wellness', 'Food & Lifestyle', 'Tech & Gaming', 'Travel & Adventure'].map((niche, index) => (
                            <li key={index}>{niche}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className={`${style.drop_down_opt} pb-3`}>
                      <div onClick={() => toggleDropdown('followerCount')} className='d-flex justify-content-between '>
                        <h4>Follower Count</h4>
                        {openDropdown === 'followerCount' ? '▲' : '▼'}

                      </div>
                      {openDropdown === 'followerCount' && (
                        <Card.Body>
                          <Form.Group>
                            <Form.Label className={`${style.range_label} d-flex justify-content-between`}>
                              <span>0</span>
                              <span>{formatRangeValue(minRangeValue)}</span>
                            </Form.Label>
                            <div className='d-flex'>
                              <Form.Control
                                type="range"
                                min="0"
                                max="1000000"
                                step="10000"
                                value={minRangeValue}
                                onChange={handleMinRangeChange}
                                className={style.first_rang_value}
                              />
                              <input type='checkbox' className='mx-2' />
                            </div>
                          </Form.Group>
                          <Form.Group className=''>
                            <Form.Label className={`${style.range_label} d-flex justify-content-between mt-5`}>
                              <span>1m</span>
                              <span>{formatRangeValue(maxRangeValue)}</span>
                            </Form.Label>
                            <div className='d-flex'>
                              <Form.Control
                                type="range"
                                min="1000000"
                                max="100000000"
                                step="1000000"
                                value={maxRangeValue}
                                onChange={handleMaxRangeChange}
                                className={`${style.second_rang_value} px-3`}
                              />
                              <input type='checkbox' className='mx-2' />
                            </div>
                          </Form.Group>
                          <div className='text-end'>
                            <button>Apply</button>
                          </div>
                        </Card.Body>
                      )}
                    </div>

                    <div className={style.drop_down_opt}>
                      <div onClick={() => toggleDropdown('budget')} className='d-flex justify-content-between '>
                        <h4>Budget</h4>
                        {openDropdown === 'budget' ? '▲' : '▼'}

                      </div>
                      {openDropdown === 'budget' && (
                        <Card.Body>
                          <Form.Group>
                            <Form.Label className='d-flex justify-content-between'>
                              <p>$1</p>
                              <p>${budget}</p>
                            </Form.Label>
                            <Form.Control
                              type="range"
                              min="1"
                              max="2000"
                              step="1"
                              value={budget}
                              onChange={handleBudgetChange}
                            />
                          </Form.Group>
                          <div className='text-end'>
                            <button>Apply</button>
                          </div>
                        </Card.Body>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>

          <Row className="my-2">
              {cardArray.map((card, index) => (
                <Col lg={4}>
                <div className={style.search_card} key={index} onClick={() => navigate("/CardProfile")}>
                  <div>
                    <img className={style.search_card_img} src={card_img} alt='Img1' />
                  </div>
                  <div className='d-flex my-4 px-3'>
                    <div>
                      <img src={card_profile_img} className={style.search_card_profile_img} alt='Profile' />
                    </div>
                    <div className='px-3 pt-3'>
                      <h5>Alexa Rawles</h5>
                      <p>alexarawles@gmail.com</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between mb-4 px-3'>
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
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchBar;
 
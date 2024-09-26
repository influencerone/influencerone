
import React, { useState, useEffect, useRef } from 'react';
// import filterDropDownImg from '../../Images/filter_drop_down.png';
import {Container, Col, Row } from 'react-bootstrap';

import style from '../ActiveInfluencer/MyProject.module.css'

const MyProject = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  // const navigate = useNavigate();
  // const location = useLocation();

  const filters = [
    { path: '/ActiveInfluencer', label: 'Active Project' },
    { path: '/RequestPage', label: 'Request' },
    { path: '/MyProfile', label: 'My Profile' },
    { path: '/Membership', label: 'Membership' },
  ];

  // 
  // const selectedFilter = filters.find(filter => filter.path === location.pathname)?.label || '';

  const handleNavigation = (label, path) => {
   
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

   

  return (
    <div>
        

      <section>
        <Container>
          <Row className="  mt-5">
            <Col md={2}>
              <div className={style.my_project_filter_btn} ref={dropdownRef}>
                <button onClick={() => setShow(!show)}>
                  <img src={''} alt="Filter" />
                </button> 
                {show && (
                  <div className={style.my_project_drop_down} >
                      {filters.map(({ path, label }) => (
                        <label
                          className={style.filter_label}
                          onClick={() => handleNavigation(label, path)}
                        >
                          <input
                            type="radio"
                            name="custom-radio-group"
                            value={label}
                            checked={""}
                            onChange={() => handleNavigation(label, path)}
                            className={style.filter_input}
                          />
                          <span
                            className={`${style.checkmark} ${
                              true ? `${style.checkmarkChecked}` : ''
                            }`}
                          ></span>
                          {label}
                        </label>
                      ))}
                  </div>
                )}
              </div>
            </Col>
            <Col md={10}>
              <div className={`${style.search_and_btn} border`}>
                <input type="text" placeholder='Search...' />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MyProject;
 
import React, { useState, useRef } from 'react';
import {Container,Row, Col} from 'react-bootstrap';

import style from './MyProfile.module.css'

import my_profile_page_img from '../../Images/my_profile_page_img.png';
import upload_img_icon from '../../Images/upload_img_icon.png';


const MyProfile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user || { username: '', email: '', mobilenumber: '', profileImage: '' });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({ ...prevState, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false); // Toggle edit mode off after saving
  };

  return (
    <div>
      {user ? (
        isEditing ? (
          <section>
            <h2 className="py-4 text-center shadow-sm">Edit Profile</h2>
            <Container>
              <Row>
                <Col md={10} className="m-auto">
                  <Row>
                    <Col md={6}>
                      <div className={`${style.profile_form} px-5`}>
                        <form onSubmit={handleSubmit}>
                          {/* <div className={`${style.user_profile_img} mb-5 text-center `}>
                            <img
                              src={formData.profileImage || user.profileImage}
                              alt="User Profile"
                              className={`${style.signup_profile_img_outline} border p-2 border-success rounded-circle`}
                              onClick={handleImageClick}
                              style={{ cursor: 'pointer', border: "green" }}
                            />
                            <img src={upload_img_icon} className={style.upload_img_icon} alt="Upload Icon" />

                            <input
                              type="file"
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                              onChange={handleImageChange}
                              accept="image/*"
                            />
                          </div> */}
                                <div className=" text-center mx-auto  d-flex justify-content-center">
                                  <div className={`${style.profile_img_outline} rounded-circle`}
                                    onClick={() => handleImageClick('profileImage')}>
                                      <img
                                      src={formData.profileImage || "profile_background_img"}
                                      className={`${style.profile_img}  rounded-circle`} alt='' 
                                      />
                                      <img src={upload_img_icon} className={style.upload_img_icon} alt="Upload Icon" />
                                  </div>
                                  <input
                                      type="file"
                                      ref={fileInputRef}
                                      style={{ display: 'none' }}
                                      onChange={handleImageChange}
                                      accept="image/*"
                                  />
                                </div>
                            
                          <div className="my-4">
                            <label>Name</label>
                            <input
                              type="text"
                              name="username"
                              value={formData.username}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="my-4">
                            <label>Email Address</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                          </div>

                          <div className="my-4">
                            <label>Mobile Number</label>
                            <input
                              type="tel"
                              name="mobilenumber"
                              value={formData.mobilenumber}
                              onChange={handleChange}
                              placeholder="Enter your mobile number"
                              required
                            />
                          </div>
                          <button type="submit" className={`${style.save_btn} mt-5`}>
                            Save
                          </button>
                        </form>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className={style.profile_form_img}>
                        <img src={my_profile_page_img} alt="Profile Page" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        ) : (
          <section>
            <h2 className="py-4 text-center shadow-sm">My Profile</h2>
            <Container>
              <Row>
                <Col md={10} className=" m-auto">
                  <Row>
                    <Col md={6}>
                      <div className={`${style.profile_form} px-5 `}>
                      <div className=" text-center mx-auto  d-flex justify-content-center">
                        <div className={`${style.profile_img_outline} rounded-circle`}>
                            <img
                              src={formData.profileImage || "profile_background_img"}
                              className={`${style.profile_img}  rounded-circle`} alt='' 
                            />
                          </div>      
                        </div>
                                    
                        <div className="my-4">
                          <label>Name</label>
                          <input
                            type="text"
                            name="username"
                            value={user.username}
                            readOnly
                          />
                        </div>
                        <div className="my-4">
                          <label>Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={user.email}
                            readOnly
                          />
                        </div>

                        <div className="my-4">
                          <label>Mobile Number</label>
                          <input
                            type="tel"
                            name="mobilenumber"
                            value={user.mobilenumber}
                            readOnly
                          />
                        </div>
                        <button
                          type="button"
                          className={`${style.edit_btn} mt-5`}
                          onClick={() => setIsEditing(true)}
                        >
                          Edit
                        </button>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className={style.profile_form_img}>
                        <img src={my_profile_page_img} alt="Profile Page" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        )
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
};

export default MyProfile;

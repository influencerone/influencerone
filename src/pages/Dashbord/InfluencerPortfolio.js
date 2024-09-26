import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';


// import collaboration_img1 from '../../Images/collaboration_history/collaboration_img1.png'
// import collaboration_img2 from '../../Images/collaboration_history/collaboration_img2.png'
// import collaboration_img3 from '../../Images/collaboration_history/collaboration_img3.png'
// import collaboration_img4 from '../../Images/collaboration_history/collaboration_img4.png'
// import collaboration_img5 from '../../Images/collaboration_history/collaboration_img5.png'
// import collaboration_img6 from '../../Images/collaboration_history/collaboration_img6.png'

import style  from '../Dashbord/Portfolio.module.css';

const InfluencerPortfolio = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const fileInputRef = useRef(null);

 


   
 
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  return (
    <Container fluid>
      <Row>

        <Col md={6}>
         
          <div>
            <Card.Body>
               <Card.Text>
                {/* <div className='portfolio_heading'> */}
                  <div className={style.portfolio_heading}>
                    <label>Brand Name</label>
                      <input type="text" className='p-3'
                      />
                  </div>
                  
                  <div className={`${style.portfolio_heading} my-5`}>
                    <label>Category</label>
                    <input type="text" className='p-3 ' 
                    />
                  </div>
                    
                {/* </div> */}
                 
                
              </Card.Text>
              <label>Logo</label>
              <div
                className="d-flex justify-content-center align-items-center mb-4"
                style={{ border: '1px dashed #ccc', height: '200px', cursor: 'pointer' }}
                onClick={handleIconClick}
              >
                <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                name='file'
              />
               {uploadedFile && (
                <div className="mt-3">
                  <h5>Uploaded File:</h5>
                  {uploadedFile.type.startsWith('image/') ? (
                    <img
                      src={URL.createObjectURL(uploadedFile)}
                      alt="Uploaded File"
                      style={{ maxWidth: '300px', height: '200px' }}
                    />
                  ) : (
                    <p>{uploadedFile.name}</p>
                  )}
                </div>
              )}               
            </Card.Body>
          </div>
        </Col>
      </Row>
      <Row>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img1} alt="boAt" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img2} alt="Amazon" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img3} alt="Lenskart" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img4} alt="Bewakoof" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img5} alt="Ghost" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
            <Col md={2}>
              <div className={style.brand_icon}>
                {/* <img src={collaboration_img6} alt="Crocs" /> */}
                <p className='text-muted pt-3'>Brand Name</p>
            </div>
            </Col>
             
      </Row>
    </Container>
  );
};

export default InfluencerPortfolio;

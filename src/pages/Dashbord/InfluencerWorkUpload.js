import React, { useState, useRef } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import style from './WorkUpload.module.css'

const InfluencerWorkUpload = () => {
   const [uploadedFiles, setUploadedFiles] = useState([null, null, null]);
    const fileInputRefs = [useRef(null), useRef(null), useRef(null)];

    const handleIconClick = (index) => {
        fileInputRefs[index].current.click();
    };

    const handleFileChange = (index, e) => {
        const files = [...uploadedFiles];
        files[index] = e.target.files[0];
        setUploadedFiles(files);
    };
  return (
    <Container fluid>
      

        <Row>
            {[0, 1, 2].map((index) => (
                <Col md={4}>
                    <div className=' ' key={index}>     
                        
                        <div
                            className={`${style.upload_file} d-flex justify-content-center align-items-center mb-4`}
                            onClick={() => handleIconClick(index)}
                        >
                            <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRefs[index]}
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileChange(index, e)}
                            name='file'
                        />
                    </div>
                </Col>

            ))}
          </Row>

          <Row>
            {[0, 1, 2].map((index) => (
                <Col md={4}>
                    <div className=' ' key={index}>
                        {uploadedFiles[index] && (
                            <div className={`${style.uploaded_file} mt-5`}>
                                <h5>Uploaded File:</h5>
                                {uploadedFiles[index].type.startsWith('image/') ? (
                                    <img
                                        src={URL.createObjectURL(uploadedFiles[index])}
                                        alt="Uploaded File"
                                    />
                                ) : (
                                    <p>{uploadedFiles[index].name}</p>
                                )}
                            </div>
                        )}
                    </div>
                </Col>
            ))}
          </Row>
    </Container>
  );
};

export default InfluencerWorkUpload;

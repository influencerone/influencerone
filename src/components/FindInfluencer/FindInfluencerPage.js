import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from '../../Components/Dropdown/FindInfluencerDropdown'; // Import the Dropdown component
import style from './FindInfluencer.module.css';
import search_influencer_img from "../../Images/search_influencer_img.png";
import { findInfluencerValidateForm } from '../../Components/FormValidation/Validation';

// Dropdown options
const campaignOptions = [
  { value: "Product Review", label: "Product Review" },
  { value: "Brand Awareness", label: "Brand Awareness" },
  { value: "New Product Launch", label: "New Product Launch" },
  { value: "New Service Launch", label: "New Service Launch" },
  { value: "Other", label: "Other" },
];

const categoryOptions = [
  { value: "Music & Dance", label: "Music & Dance" },
  { value: "Beauty & Fashion", label: "Beauty & Fashion" },
  { value: "Fitness & Wellness", label: "Fitness & Wellness" },
  { value: "Food & Lifestyle", label: "Food & Lifestyle" },
  { value: "Tech & Gaming", label: "Tech & Gaming" },
  { value: "Travel & Adventure", label: "Travel & Adventure" },
];

const budgetOptions = [
  { value: "1k", label: "1k" },
  { value: "5k", label: "5k" },
  { value: "10k", label: "10k" },
  { value: "20k", label: "20k" },
  { value: "50k", label: "50k" },
  { value: "100k", label: "100k" },
  { value: "1m", label: "1m" },
  { value: "2m", label: "2m" },
  { value: "10m", label: "10m" },
  { value: "20m", label: "20m" },
  { value: "30m", label: "30m" },
  { value: "50m", label: "50m" },
  { value: "100m", label: "100m" },
];

const countryOptions = [
  { value: "us", label: "United States", flag: "🇺🇸", code: "+1" },
  { value: "in", label: "India", flag: "🇮🇳", code: "+91" },
  { value: "gb", label: "United Kingdom", flag: "🇬🇧", code: "+44" },
];

const FindInfluencerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    campaignType: "",
    categories: "",
    budgetMin: "",
    budgetMax: "",
    websiteLink: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([null, null]);
  const fileInputRefs = [useRef(null), useRef(null)];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSelect = (name, option) => {
    setFormData({ ...formData, [name]: option.value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    setUploadedFiles((prev) => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
    setFormData({ ...formData, [`productPhoto${index + 1}`]: file?.name || "" });
  };

  const renderFileContent = (index) => {
    const file = uploadedFiles[index];
    return file ? (
      <img src={URL.createObjectURL(file)} alt="Uploaded" className={style.uploaded_file} />
    ) : (
      <i className="bi bi-upload" style={{ fontSize: "2rem" }}></i>
    );
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm(formData);
  //   setErrors(validationErrors);
  //   if (Object.keys(validationErrors).length === 0) {
  //     navigate("../SearchBar/SearchBar");
  //     alert("a")
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = findInfluencerValidateForm(formData);
    console.log(validationErrors); // Check the validation errors
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/SearchBar");
      alert("a"); // This should fire if there are no errors
    }
  };
  
  return (
    <section>
      <div className="py-4 border text-center shadow-sm">
        <h2>Find Your Influencer</h2>
      </div>
      <form className={style.find_influencer_form} onSubmit={handleSubmit}>
        <Container>
          <Row className="my-5">
            <Col md={6}>
              <div className={style.form_group}>
              <Row>
                <label>Upload Product Image</label>
                {[0, 1].map((index) => (
                  <Col md={6} key={index} >
                    <div
                      className={`${style.upload_file} rounded d-flex justify-content-center align-items-center `}
                      onClick={() => fileInputRefs[index].current.click()}
                    >
                      {renderFileContent(index)}
                      <input
                        type="file"
                        ref={fileInputRefs[index]}
                        style={{ display: "none" }}
                        onChange={(e) => handleFileChange(index, e)}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
              </div>
              {[
                { label: "Product Name", name: "productName" },
                { label: "Website Link", name: "websiteLink" }
              ].map(({ label, name }) => (
                <div className={style.form_group} key={name}>
                  <label>{label}</label>
                  <input type="text" name={name} value={formData[name]} onChange={handleChange} />
                  {errors[name] && <span className={style.error_message}>{errors[name]}</span>}
                </div>
              ))}

              {[
                { label: "Campaign Type", name: "campaignType", options: campaignOptions },
                { label: "Categories", name: "categories", options: categoryOptions },
                { label: "Budget Min", name: "budgetMin", options: budgetOptions },
                { label: "Budget Max", name: "budgetMax", options: budgetOptions },
                { label: "Country", name: "country", options: countryOptions, showCode: true }
              ].map(({ label, name, options, showCode }) => (
                <div className={style.form_group} key={name}>
                  <Dropdown
                    options={options}
                    selectedValue={formData[name]}
                    onSelect={(option) => handleSelect(name, option)}
                    label={label}
                    showCode={showCode}
                  />
                  {errors[name] && <span className={style.error_message}>{errors[name]}</span>}
                </div>
              ))}
            </Col>
            <Col md={6}>
              <div className={style.search_influencer_img}>
                <img src={search_influencer_img} alt="Influencer Search" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`w-50 mx-auto mb-5 ${style.search_btn}`}>
          <button type="submit">Search</button>
        </div>
      </form>
    </section>
  );
};

export default FindInfluencerPage;

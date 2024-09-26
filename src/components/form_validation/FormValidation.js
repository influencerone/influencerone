// signup validation  
export const signupValidateForm = (data) => {
    const errors = {};
    // Loop through each key in the data
    Object.keys(data).forEach((key) => {
      if (!data[key].trim()) {
        errors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`; // General required field check
      }
    });
    // Specific validation for email
    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    // Specific validation for password
    if (data.password && data.password.length < 8) {
      errors.password = "Password must have at least 8 characters";
    }
    // Specific validation for mobile number
    if (data.mobilenumber && !/^\d{10}$/.test(data.mobilenumber.trim())) {
      errors.mobilenumber = "Mobile Number must be exactly 10 digits long";
    }
    return errors;
  };
  
  // login validation  
  export const loginValidateForm = (data) => {
    const errors = {};
    if (!data.email || !data.email.trim()) {
      errors.email = "Email is required";
    }  
    if (!data.password || !data.password.trim()) {
      errors.password = "Password is required";
    }  
    return errors;
  };
  
  
  // Form validation for the Find Influencer page
  export const findInfluencerValidateForm = (data) => {
    const errors = {};
    
    // Basic validation for required fields
    Object.keys(data).forEach((key) => {
      if (!data[key].trim()) {
        errors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
      }
    });
    
    return errors;
  };
  
  
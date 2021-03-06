
const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
  }
  
  const isEmail = (email) => {
    const regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
  }

  exports.validateSignupData = (data) => {
    let errors = {};
  
    if(isEmpty(data.email)) {
      errors.email = 'Email must not be empty'
    } else if (!isEmail(data.email)) {
      errors.email  = 'Must be a valid email address'
    }
  
    if(isEmpty(data.password)) errors.password = "Password must not be empty";
    if(data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match";
    if(isEmpty(data.handle)) errors.handle = "Must not be empty";
      
    return {
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false
    };
  };

  exports.validateLoginData = (data) => {
    let errors = {};
  
    if(isEmpty(data.email)) errors.email = "Email must not be empty";
    if(isEmpty(data.password)) errors.password = "Password must not be empty";
  
    return {
        errors, 
        valid: Object.keys(errors).length === 0 ? true : false
    };
  };

  exports.reduceUserDetails = (data) => {
    let userDetails = {};
    if(data.note && !isEmpty(data.note)) userDetails.note = data.note;
    if(data.phone && !isEmpty(data.phone)) userDetails.phone = data.phone;
    if(data.startLoc && !isEmpty(data.startLoc)) userDetails.startLoc = data.startLoc;
    if(data.schedule && data.schedule.length > 0) userDetails.schedule = data.schedule;
    if(data.major && data.major.length > 0) userDetails.major = data.major;
    if(data.language && data.language.length > 0) userDetails.language = data.language;
    if(data.places && data.places.length > 0) userDetails.places = data.places;
    return userDetails;
  }
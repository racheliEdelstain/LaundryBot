import React, { useState } from 'react';
import './styles/EnterToSiteStyle.css'; // Import your CSS file for styling
import './LaundryBot.js';
import { Link } from 'react-router-dom';
import ImageArea from './ImageArea.js';
import UserData from '../models/UserData.js';

const EnterToSiteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };
let userData= new UserData();
  return (
    <div>
      <title>LaundryBot כניסה</title>
      <h2 className='h2'>כניסה</h2>
      <div>
        <div className="enter-to-site-form-container">
          <form>
            <div className="form-group">
              <label htmlFor="userName">שם משתמש</label>
              <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">מייל</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">סיסמא</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className='linksArea'>
              <button className='link'> <Link to="/laundry-bot">התחל שימוש</Link></button>
              <button className='link'> <Link to="/laundry-bot-enrollment">עדיין לא רשום? לחץ כאן!</Link></button>
            </div>
            </form>
        </div>

      </div>
    </div>
  );
};

export default EnterToSiteForm;

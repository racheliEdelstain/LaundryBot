import React, { useState } from 'react';
// import './EnrollmentStyle.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
import Card from './Card';
import UserData from '../models/UserData';

const Enrollment = () => {
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
  let userData= new UserData();


  return (
    <div>
      <title>LaundryBot הרשמה</title>

      <h2 className='h2'>הרשמה</h2>
      <div className="enter-to-site-form-container">
        <form>
          <div className="form-group">
            <label htmlFor="userName">שם משתמש</label>
            <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required placeholder='שם משתמש' />
          </div>
          <div className="form-group">
            <label htmlFor="email">מייל</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">סיסמא</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <h3>💳💳💳פרטי תשלום💳💳💳</h3>
          <Card />

          <button className='link'> <Link to="/laundry-bot">התחל שימוש</Link></button>
        </form>
      </div>
    </div>
  );
};

export default Enrollment;

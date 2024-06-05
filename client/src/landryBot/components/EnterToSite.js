import React, { Component, MouseEvent, useState } from 'react';
import './styles/EnterToSiteStyle.css'; // Import your CSS file for styling
import './LaundryBot.js';
import { Link } from 'react-router-dom';
import ImageArea from './ImageArea.js';
import UserData from '../data/models/UserData.js';
import { AllUsers } from '../data/DB.js';
import Password from './Password.js';
import axios from "axios";



export default class EnterToSiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userMail: "",
      userPassword: "",
      showPassword: "false"
    };
    this.updateUserMail = this.updateUserMail.bind(this); // קשרו את הפונקציה
    this.updateUserName = this.updateUserName.bind(this); // קשרו את הפונקציה
    this.updateUserPassword = this.updateUserPassword.bind(this); // קשרו את הפונקציה
    this.updateShowPassword = this.updateShowPassword.bind(this); // קשרו את הפונקציה
  }


  //פונקציה שבודקת אם המשתמש קיים ברשימה
  isUser() {
    
    axios.post('http://127.0.0.1:5000/is_user/', {
      user_name: this.state.userName,
      email: this.state.userMail,
      password: this.state.userPassword
    }).then((res) => {
      console.log(res)
      return res
    })


  };

  updateUserName(event) {
    this.setState({ userName: event.target.value })
  }
  updateUserMail(event) {
    this.setState({ userMail: event.target.value })
  }
  updateUserPassword(userPassword) {
    this.setState({ userPassword })
  }
  updateShowPassword(showPassword) {
    this.setState({ showPassword })
  }
  allFull() {
    if (this.state.userName === "" || this.state.userMail === "" || this.state.userPassword === "")
      return false
    return true;
  }
  handleSubmit() {
    if (this.isUser()==="True" && this.allFull())//המשתמש קיים במערכת
      return <Link to="/laundry-bot" state={{ userName: this.state.userName }} className='link'> התחל שימוש</Link>

    if (this.allFull() && this.isUser()==="False")
      return <Link to="/laundry-bot-enrollment" className='link' state={{ userName: this.state.userName, userMail: this.state.userMail, userPassword: this.state.userPassword }}>להרשמה ותשלום לחץ כאן🖊️</Link>

    return <h3 className='link'> התחל שימוש</h3>
  }

  render() {
    return (
      <div>

        <title>LaundryBot כניסה</title>
        <h2 className='h2'>כניסה</h2>
        <div>
          <div className="enter-to-site-form-container">
            <form>
              <div className="form-group">

                <label htmlFor="userName">שם משתמש</label>
                <input type="text" id="userName" name="userName" required
                  onChange={this.updateUserName} />
              </div>
              <div className="form-group">
                <label htmlFor="email">מייל</label>
                <input type="email" id="email" name="email" required
                  onChange={this.updateUserMail} />
              </div>
              <Password password={this.state.userPassword} setPassword={this.updateUserPassword} showPassword={this.state.showPassword} setShowPassword={this.updateShowPassword} />
              <div className='linksArea'>
                <button className='button_in_link'>{this.handleSubmit()}</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  };
}

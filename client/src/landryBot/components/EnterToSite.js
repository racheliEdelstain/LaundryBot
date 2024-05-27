import React, { Component, MouseEvent, useState } from 'react';
import './styles/EnterToSiteStyle.css'; // Import your CSS file for styling
import './LaundryBot.js';
import { Link } from 'react-router-dom';
import ImageArea from './ImageArea.js';
import UserData from '../data/models/UserData.js';
import { AllUsers } from '../data/DB.js';



export default class EnterToSiteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userMail: "",
      userPassword: ""
    };
    this.updateUserMail = this.updateUserMail.bind(this); // קשרו את הפונקציה
    this.updateUserName = this.updateUserName.bind(this); // קשרו את הפונקציה
    this.updateUserPassword = this.updateUserPassword.bind(this); // קשרו את הפונקציה
  }
  

  //פונקציה שבודקת אם המשתמש קיים ברשימה
  isUser() {
    for (let i = 0; i < AllUsers.length; i++) {
      if (AllUsers[i].UserName === this.state.userName && AllUsers[i].Password === this.state.userPassword && AllUsers[i].Mail === this.state.userMail)
        return true
    }
    return false;
  };

  updateUserName(event) {
    this.setState({ userName: event.target.value })
  }
  updateUserMail(event) {
    this.setState({ userMail: event.target.value })
  }
  updateUserPassword(event) {
    this.setState({ userPassword: event.target.value })
  }
  allFull() {
    if (this.state.userName === "" || this.state.userMail === "" || this.state.userPassword === "")
      return false
    return true;
  }
  handleSubmit() {
    if (this.isUser() && this.allFull())//המשתמש קיים במערכת
      return <Link to="/laundry-bot"> התחל שימוש</Link>

    if (this.allFull() && !this.isUser())
      return <Link to="/laundry-bot-enrollment" state={{userName:this.state.userName,userMail:this.state.userMail,userPassword:this.state.userPassword}}>להרשמה ותשלום לחץ כאן🖊️</Link>

    return <h3> התחל שימוש</h3>

    // this.isUser() && this.allFull() ? <Link to="/laundry-bot"> התחל שימוש</Link> : <Link to="/laundry-bot-enrollment">להרשמה ותשלום לחץ כאן!</Link>
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

                <h2>isUser: {String(this.isUser())} isFull: {String(this.allFull())}</h2>

                <label htmlFor="userName">שם משתמש</label>
                <input type="text" id="userName" name="userName" required
                  onChange={this.updateUserName} />
                <h2>userName: {this.state.userName}</h2>

              </div>
              <div className="form-group">
                <label htmlFor="email">מייל</label>
                <input type="email" id="email" name="email" required
                  onChange={this.updateUserMail} />
                <h2>userMail: {this.state.userMail}</h2>
              </div>
              <div className="form-group">
                <label htmlFor="password">סיסמא</label>
                <input type="password" id="password" name="password" required
                  onChange={this.updateUserPassword} />
                <h2>userPassword: {this.state.userPassword}</h2>
              </div>
              <div className='linksArea'>
                <button className='link'>{this.handleSubmit()}</button>
              </div>
            </form>
          </div>

        </div>
      </div>
      );
  };
}

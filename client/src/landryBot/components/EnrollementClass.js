import React, { Component, useState ,Link} from 'react';
import Card from './Card';
import EnterToSiteForm from './EnterToSite';
import UserData from '../data/models/UserData';
import CardData from '../data/models/CardData';
import './styles/EnterToSiteStyle.css';


// לניסוי בלבד!!!!!!!!!!!!!!!!!!!!!!!!!!111


export default class EnrollementClass extends Component {
    constructor(userName, userMail, userPassword) {
        super("");
        this.state = {
            userName: userName,
            userMail: userMail,
            userPassword: userPassword,
            CreditCardNumber: "",
            Name: "",
            ValidMonth: "",
            ValidYear: ""
        };
        this.updateUserMail = this.updateUserMail.bind(this); // קשרו את הפונקציה
        this.updateUserName = this.updateUserName.bind(this); // קשרו את הפונקציה
        this.updateUserPassword = this.updateUserPassword.bind(this); // קשרו את הפונקציה

    }
    updateUserName(event) {
        this.setState({ userName: event.target.value })
      }
      updateUserMail(event) {
        this.setState({ userMail: event.target.value })
      }
      updateUserPassword(event) {
        this.setState({ userPassword: event.target.value })
      }

    handleLogin(){}



    render() {
        return (
            <div>
                <title>LaundryBot הרשמה</title>

                <h2 className='h2'>הרשמה</h2>
                <div className="enter-to-site-form-container">
                    <form>

                        <div className="form-group">
                            <label htmlFor="userName">שם משתמש</label>
                            <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.updateUserName} required placeholder='שם משתמש' />
                        </div>
                        <h2>userName: {this.state.userName}</h2> 
                         <div className="form-group">
                            <label htmlFor="email">מייל</label>
                            <input type="email" id="email" name="email" value={this.state.userMail} onChange={this.updateUserMail} required />
                        </div>
                        <h2>userMail: {this.state.userMail}</h2>

                        <div className="form-group">
                            <label htmlFor="password">סיסמא</label>
                            <input type="password" id="password" name="password" value={this.state.userPassword} onChange={this.updateUserPassword} required />
                        </div>
                        <h2>UserPassword: {this.state.userPassword}</h2>

                        <h3>💳💳💳פרטי תשלום💳💳💳</h3>
                        <Card />
                        {/* <h2>creditNumber: {CreditCardNumber}</h2> */}
                        {/* <h2>name: {myCard.getName()}</h2> */}
                        {/* <h2>validMonth: {myCard.getMonth()}</h2> */}
                        {/* <h2>validYear: {myCard.getYear()}</h2>  */}
                        {/* <button className='link' onClick={this.handleLogin}> <Link to="/laundry-bot">התחל שימוש</Link></button> */}
                    </form>
                </div>
            </div>
        );
    };
}

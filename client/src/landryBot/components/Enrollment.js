import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from './Card';
import EnterToSiteForm from './EnterToSite';
import UserData from '../data/models/UserData';
import CardData from '../data/models/CardData';
import { AllUsers } from '../data/DB';

// const myEnterToSiteForm = new EnterToSiteForm();

export default function Enrollment() {

  const lacation = useLocation();
  const { userName } = lacation.state;
  const { userMail } = lacation.state;
  const { userPassword } = lacation.state;



  const [UserName, setUserName] = useState(userName);
  const [UserMail, setUserMail] = useState(userMail);
  const [UserPassword, setUserPassword] = useState(userPassword);


  let c = new CardData("•••• •••• •••• ••••", "Your NAME", "•• ", " •• ")
  const [CreditCardData, setCreditCardData] = useState(c);


  const updateUserName = (event) => {
    setUserName(event.target.value)
  }
  const updateUserMail = (event) => {
    setUserMail(event.target.value)
  }
  const updateUserPassword = (event) => {
    setUserPassword(event.target.value)
  }

  function handleLogin() {
    let newUser=new UserData(UserName,UserMail,UserPassword,CreditCardData);
    console.log(newUser)
    console.log(newUser.CreditCard.CreditNumber);
    console.log(newUser.CreditCard.NameUserCredit)
    console.log(newUser.CreditCard.ValidYear);
    console.log(newUser.CreditCard.ValidMonth)

    alert("נוספת בהצלחה למשתמשים שלנו!");
  }
  return (
    <div>
      <title>LaundryBot הרשמה</title>

      <h2 className='h2'>הרשמה</h2>
      <div className="enter-to-site-form-container">
        <form>

          <div className="form-group">
            <label htmlFor="userName">שם משתמש</label>
            <input type="text" id="userName" name="userName" value={UserName} onChange={updateUserName} required placeholder='שם משתמש' />
          </div>
          {/* <h2>userName: {UserName}</h2> */}
          <div className="form-group">
            <label htmlFor="email">מייל</label>
            <input type="email" id="email" name="email" value={UserMail} onChange={updateUserMail} required />
          </div>
          {/* <h2>userMail: {UserMail}</h2> */}

          <div className="form-group">
            <label htmlFor="password">סיסמא</label>
            <input type="password" id="password" name="password" value={UserPassword} onChange={updateUserPassword} required />
          </div>
          {/* <h2>UserPassword: {UserPassword}</h2> */}

          <h3>💳💳💳פרטי תשלום💳💳💳</h3>
          <Card CreditData={CreditCardData} setCreditData={setCreditCardData} />
          {/* <h2>creditNumber: {CreditCardData.CreditNumber}</h2>
          <h2>name: {CreditCardData.NameUserCredit}</h2>
          <h2>validMonth: {CreditCardData.ValidMonth}</h2>
          <h2>validYear: {CreditCardData.ValidYear}</h2> */}
          <button className='link' onClick={handleLogin}> <Link to="/laundry-bot">התחל שימוש</Link></button>
        </form>
      </div>
    </div>


  );
};
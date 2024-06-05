import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from './Card';
import UserData from '../data/models/UserData';
import CardData from '../data/models/CardData';
import { AllUsers } from '../data/DB';
import Password from './Password';

export default function Enrollment() {
  const currentLocation = useLocation();
  const { userName = '', userMail = '', userPassword = '' } = currentLocation.state || {};

  const [UserName, setUserName] = useState(userName);
  const [UserMail, setUserMail] = useState(userMail);
  const [UserPassword, setUserPassword] = useState(userPassword);
  const [showPassword, setShowPassword] = useState("false");

  let c = new CardData("•••• •••• •••• ••••", "Your NAME", "•• ", " •• ");
  const [CreditCardData, setCreditCardData] = useState(c);

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updateUserMail = (event) => {
    setUserMail(event.target.value);
  };

  const updateUserPassword = (newPassword) => {
    setUserPassword(newPassword);
  };

  const updateShowPassword = (statusPassword) => {
    setShowPassword(statusPassword);
  };

  function handle_registration() {
    let newUser = new UserData(UserName, UserMail, UserPassword, CreditCardData);
    console.log(newUser);
    console.log(newUser.CreditCard.CreditNumber);
    console.log(newUser.CreditCard.NameUserCredit);
    console.log(newUser.CreditCard.ValidYear);
    console.log(newUser.CreditCard.ValidMonth);
    alert("נוספת בהצלחה למשתמשים שלנו!");
  }

  return (
    <div>
      UserName: ({UserName}) UserMail:({UserMail}) UserPassword: ({UserPassword}) showPassword:({showPassword}) CreditNumber: ({CreditCardData.CreditNumber}) userCredit: ({CreditCardData.NameUserCredit}) ValidMonth: ({CreditCardData.ValidMonth}) ValidYear: ({CreditCardData.ValidYear})

      <title>LaundryBot הרשמה</title>
      <h2 className='h2'>הרשמה</h2>
      <div className="enter-to-site-form-container">
        <form>
          <div className="form-group">
            <label htmlFor="userName">שם משתמש</label>
            <input type="text" id="userName" name="userName" value={UserName} onChange={updateUserName} required placeholder='שם משתמש' />
          </div>
          <div className="form-group">
            <label htmlFor="email">מייל</label>
            <input type="email" id="email" name="email" value={UserMail} onChange={updateUserMail} required />
          </div>
          <Password password={UserPassword} setPassword={updateUserPassword} showPassword={showPassword} setShowPassword={updateShowPassword} />
          <h3>💳💳💳פרטי תשלום💳💳💳</h3>
          <Card CreditData={CreditCardData} setCreditData={setCreditCardData} />
          <Link to="/laundry-bot" state={{ userName: UserName }}><button className='button_in_link'>כניסה</button></Link>
        </form>
      </div>
    </div>
  );
}

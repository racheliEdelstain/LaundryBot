import React from "react";
import { useState, useEffect } from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');//הודעת שגיאה
  const [linkError, setLinkError] = useState(false);//מצב שיאת קישור
  const [isDisabled, setIsDisabled] = useState(true);//אם הכפתור מושבת 

  //מערך משתמשים
  const existingUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ];
  //פונקציה שבודקת אם המשתמש קיים ברשימה
  const validateUser = (username, password) => {
    return existingUsers.some(//פונקציה שבודקת אם הערכים קיימים ומחזירה אמת אם מתקיים
      (user) => user.username === username && user.password === password
    );
  };
  //פעולות צדדיות בכל פעם שהקומפוננטה נטענת או כאשר משתנים מסוימים מתעדכנים בודק את התקינות שלהם
  useEffect(() => {
    const isFormValid = username && password;
    setIsDisabled(!isFormValid || !validateUser(username, password));// הכפתור לא מושסת -אם שתי התנאים מתקיימים  מכניס שקר 
  }, [username, password]);
  //פונקציה שמעדכנת את השדות שנקלטו ומאפסת הודעות שגיאה 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    //--
    setErrorMessage('');//מאפס הודעת שגיאה
    setLinkError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    //--
    setErrorMessage('');//אין הודעת שגיאה
    setLinkError(false);//אין שגיאה בלינק
  };
  //פונקציה שבודקת התחברות משתמש ומציגה לו אם קיים או לא במערכת
  const handleSubmit = (event) => {
    event.preventDefault();//מונע את התנהגות ברירת המחדל של הטופס, כלומר מונע רענון של העמוד לאחר השליחה של הטופס.

    const userExists = validateUser(username, password);//בדיקה אם המשתמש קיים במערכת

    //הדפסת הודעת שיאה המשתמש לא קיים במערכת
    if (!userExists) {
      setErrorMessage('יש להתחבר');
      setLinkError(true);//יש שגיאה בלינק
      setIsDisabled(true);

    }
    else {
      setErrorMessage('');
      setLinkError(false);
      setIsDisabled(false);
      // // Successful login logic here
       console.log('Username:', username);
       console.log('Password:', password);
      setUsername('');
      setPassword('');
    }

  };

  return (
    <div className="enterForm">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {errorMessage && <div style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</div>}
        <button type="submit" disabled={isDisabled}>
          {isDisabled ? (
            'login'
          ) : (
            <Link to="/user-area">login</Link>
          )}

        </button>
      </form>
      <Link to="/sign-up" className={linkError ? 'signup-link-error' : 'signup-link'}>don't have account? create one!</Link>
    </div>
  );
};

export default Login;
{/* <Link to ="/sign-up">don't have account? create one!</Link> */ }

{/* <Link to={isDisabled ? "#" : "/user-area"}>login</Link> */ }

{/* {isDisabled ? 'login' : <Link to="/user-area">login</Link>} */ }
{/* <Link to="/user-area">login</Link> */ }
//לפני
// useEffect(() => {
//   const isFormValid = username && password && validateUser(username, password);
//   setIsDisabled(!isFormValid);
// }, [username, password]);

// const userExists = existingUsers.some(
//   (user) => user.username === username && user.password === password
// );
// Clear the fields after submission
// Redirect the user to user-area
// history.push('/user-area');
// window.location.href = "/user-area";
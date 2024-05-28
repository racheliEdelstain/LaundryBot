import './styles/CardStyle.css'

import React from "react";
import InputMask from "react-input-mask";
import Enrollment from './Enrollment';
import EnterToSiteForm from './EnterToSite';
import { useState } from 'react';


export default function Card({ CreditData, setCreditData }) {

  let CreditCardDataTemp = { CreditData };


  function handleNumberChange(e) {
    let text = e.target.value;
    let initial = "•••• •••• •••• ••••";
    let number_card;
    CreditCardDataTemp.CreditNumber = text
    CreditCardDataTemp.NameUserCredit = CreditData.NameUserCredit
    CreditCardDataTemp.ValidYear = CreditData.ValidYear
    CreditCardDataTemp.ValidMonth = CreditData.ValidMonth


    setCreditData(CreditCardDataTemp)
    console.log(text)
    if (text === " ") {
      CreditCardDataTemp.CreditNumber = initial
      setCreditData(CreditCardDataTemp);
    }
    else {
      number_card = initial.slice(text.length - 1);
      CreditCardDataTemp.CreditNumber = e.target.value + number_card

      setCreditData(CreditCardDataTemp);
    }
  };
  function handleNameChange(e) {
    let name = e.target.value;
    if (e.target.value.match(/[0-9]/g)) {
      e.target.value = name.slice(0, name.length - 1);
    }

    CreditCardDataTemp.NameUserCredit = CreditData.NameUserCredit
    CreditCardDataTemp.ValidYear = CreditData.ValidYear
    CreditCardDataTemp.ValidMonth = CreditData.ValidMonth
    CreditCardDataTemp.CreditNumber = CreditData.CreditNumber
    CreditCardDataTemp.NameUserCredit = e.target.value.toUpperCase()
    setCreditData(CreditCardDataTemp);
    if (e.target.value === "") {
      CreditCardDataTemp.NameUserCredit = "Your NAME"
      setCreditData(CreditCardDataTemp);
    }
  };


  function handleExpiryChange(e) {
    let date = e.target.value;

    CreditCardDataTemp.NameUserCredit = CreditData.NameUserCredit
    CreditCardDataTemp.CreditNumber = CreditData.CreditNumber


    if (date.slice(0, 2) > 12) {
      e.target.value = 1;
    }

    if (date.slice(0, 2) < 13) {
      CreditCardDataTemp.ValidYear = date.slice(0, 2)
      CreditCardDataTemp.ValidMonth = date.slice(2)
      setCreditData(CreditCardDataTemp);
    }
    if (e.target.value === "") {
      CreditCardDataTemp.ValidYear = "•• "
      CreditCardDataTemp.ValidYear = "•• "
      setCreditData(CreditCardDataTemp);
    }
  };
  return (
    <div className="containerPaymentForm">
      <div className="Default">
        <h2>{CreditData.CreditNumber}</h2>
        <div className='validAndName'>
          <h6 id="valid">
            valid thru
            <br />
            {CreditData.ValidYear}/{CreditData.ValidMonth}
          </h6>
          <h3>{CreditData.NameUserCredit}</h3>
        </div>
      </div>

      <form className="form-input">
        <label>מספר כרטיס:</label>
        <InputMask
          mask=" 9999 9999 9999 9999"
          maskChar=""
          placeholder="Number Card"
          onChange={handleNumberChange}
        />

        <br></br>
        <label>בעל הכרטיס:</label>
        <InputMask
          maskChar=""
          placeholder="User Name"
          maxLength="14"
          onChange={handleNameChange}
        />
        <br></br>
        <label>תוקף:</label>
        <InputMask
          mask="99 99"
          maskChar=""
          //maxLength="4"
          placeholder="month / year"
          onChange={handleExpiryChange}
        />
      </form>
    </div>
  );

}


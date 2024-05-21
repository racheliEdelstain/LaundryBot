import './styles/CardStyle.css'

import React from "react";
import InputMask from "react-input-mask";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      CartNumber: "•••• •••• •••• ••••",
      Name: "Your NAME",
      cardStyle: "Default",
      day: "•• ",
      month: " •• "
    };
  }
  handleNumberChange = e => {
    let text = e.target.value;
    let initial = "•••• •••• •••• ••••";
    let number_card;
    if (text.length === 0) {
      this.setState({
        CartNumber: initial
      });
    } else {
      number_card = initial.slice(text.length - 1);

      this.setState({
        CartNumber: e.target.value + number_card
      });
    }
  };
  handleNameChange = e => {
    let name = e.target.value;
    if (e.target.value.match(/[0-9]/g)) {
      e.target.value = name.slice(0, name.length - 1);
    }
    this.setState({
      Name: e.target.value.toUpperCase()
    });
    if (e.target.value === "") {
      this.setState({
        Name: "Your NAME"
      });
    }
  };
  handleExpiryChange = e => {
    let date = e.target.value;
    if (date.slice(0, 2) > 12) {
      e.target.value = 1;
    }
    if (date.slice(0, 2) < 33) {
      this.setState({
        day: date.slice(0, 2),
        month: date.slice(2)
      });
    }
    if (e.target.value === "") {
      this.setState({
        day: "•• ",
        month: " •• "
      });
    }
  };
  render() {
    return (
      <div className="containerPaymentForm">
        <div className={this.state.cardStyle}>
          <h2>{this.state.CartNumber}</h2>
          <div className='validAndName'>
            <h6 id="valid">
              valid thru
              <br />
              {this.state.day}/{this.state.month}
            </h6>
            <h3>{this.state.Name}</h3>
          </div>
        </div>

        <form className="form-input">
          <label>מספר כרטיס:</label>
          <InputMask
            mask=" 9999 9999 9999 9999"
            maskChar=""
            placeholder="Number Card"
            onChange={this.handleNumberChange}
          />

          <br></br>
          <label>בעל הכרטיס:</label>
          <InputMask
            maskChar=""
            placeholder="User Name"
            maxLength="20"
            onChange={this.handleNameChange}
          />
          <br></br>
          <label>תוקף:</label>
          <InputMask
            mask="99 99"
            maskChar=""
            //maxLength="4"
            placeholder="month / day"
            onChange={this.handleExpiryChange}
          />
        </form>
      </div>
    );
  }
}

export default Card;

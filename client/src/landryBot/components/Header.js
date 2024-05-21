
import './styles/HeaderStyle.css';
import React from 'react';
import logoLaundryBot from '../../pictures/logoLaundryBot.png';

export default function Header() {
    return <div className="header">
        <img src={logoLaundryBot} alt="logoLaundryBot"  />
    </div>
}
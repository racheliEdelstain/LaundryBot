import React, { useState } from 'react';
import './styles/LaundryBotStyle.css'; // Import your CSS file for styling
import ImageArea from './ImageArea';
import UnderPile from './UnderPile';
import UnderGarment from './UnderGarment';
import { useLocation, Link } from 'react-router-dom';



export default function LaundryBot() {
    const currentLocation  = useLocation();
    const { userName = '' } = currentLocation .state || {};

    return (
        <div class="grid-container">
            <title>LaundryBot!!!!</title>
            <div class="item1">
                <p className='p'>שלום {userName}<br />כדי להשתמש באחת מהאופציות העומדות לרשותך עליך לגרור או להעלות תמונה.</p>
            </div>
            <div class="item2-item3">
                <div className='Garment'>
                    <ImageArea title="זיהוי מרקם הבד, זיהוי כתם וצבע דומיננטי" />
                    <h2 >landryBot result-------</h2>
                    <UnderGarment id="underGarment" urlImage="C:\Users\user\Documents\Final Project\LaundryBot\client\public\favicon3.png" />
                </div>
                <div className='pile'>
                    <ImageArea title="זיהוי ערימת ביגוד" />
                    <h2 >landryBot result-------</h2>
                    <UnderPile id="underPile" />
                </div>
            </div>
        </div>
    );
};


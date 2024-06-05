import React, { useState } from 'react';
import './styles/ImageAreaStyle.css';
import ApiExample from '../api_request/ImageService';
import axios from "axios";

export default function ImageArea({ title }) {
    const [url, setUrl] = React.useState('');
    const [result,setResult]=React.useState('starting');
   
    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };


    
const handleClick=()=>{
    let u=String(url)
    axios.post('http://127.0.0.1:5000/check_image/', {
    url:u
    }).then((res) => {
      console.log(res)
    })
}





    return (
        <div>
        <h3 className='title'>{title}</h3>
        <div className="image_area">
            <div className="image-container">
            {
                url ?
                    <img
                        className='image-view'
                        style={{ width: '99%', height: '99%' }}//הגודל שהתמונה תתפוס בתוך הריבוע שאליו ניתן לגרור או להעלות תמונה
                        src={url} alt="" />
                    :
                    <div className="upload-container">
                        <input  type="file"   className="input-file"  accept=".png, .jpg, .jpeg" onChange={onChange} ></input>
                         <p>לחץ כאן כדי להוסיף תמונה / גרור או שחרר תמונה</p>
                    </div>
            }

        </div>
            <input  className='send' type='submit' value="בדיקה" onClick={handleClick}/>
            <div>{result}</div>
            <h2>sorce image: {url}</h2>
        </div>
        </div>
    )
}



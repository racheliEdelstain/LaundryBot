import React, { useState } from 'react';
import './styles/ImageAreaStyle.css';


export default function ImageArea({ title }) {
    const [url, setUrl] = React.useState('');

    const onChange = (e) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };
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
            <input  className='send' type='submit' value="בדיקה"/>
        </div>
        </div>
    )
}


// return <div className='image_area'>
// <h3>{title}</h3>
// <div className="drop-area" >
//     <div className="drag-square"> <input type="file"></input></div>
// </div>
// </div>




// import React, { useState } from 'react';

// export default function ImageArea({ title }) {
//     const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }

    

    
//     return (
//         <div className="image_area">
//             <h3>{title}</h3>
//             <input type="file" onChange={handleChange} />
//             <img className='drag-square' src={file}  ></img>
//             <input type='submit' value="שליחה"/>
//         </div>
//     )
// }
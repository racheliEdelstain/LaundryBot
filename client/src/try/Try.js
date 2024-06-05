

// // https://legacy.reactjs.org/docs/faq-ajax.html
// import React from 'react';
// import { useState,useEffect } from 'react';

// export default function MyComponent() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
  
//     // Note: the empty deps array [] means
//     // this useEffect will run once
//     // similar to componentDidMount()
//     useEffect(() => {
//       fetch("https://api.example.com/items")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setIsLoaded(true);
//             setItems(result);
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             setIsLoaded(true);
//             setError(error);
//           }
//         )
//     }, [])
  
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }


// // https://legacy.reactjs.org/docs/faq-ajax.html
// import React from "react";
// import { useState } from 'react';
// class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         items: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("http://localhost:5000/")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
//           <ul>
//             {items.map(item => (
//               <li key={item.id}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//   }
//   export default Example;






// import React, { useState } from 'react';

// export default function Example() {
//   const [data, setData] = useState(null);

//   function handleClick() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://127.0.0.1:5000/');
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         setData(JSON.parse(xhr.responseText));
//       }
//     };
//     xhr.send();
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Get Data</button>
//       {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
//     </div>
//   );
// }





// // https://www.freecodecamp.org/news/how-work-with-restful-apis-in-react-simplified-steps-and-practical-examples/
// import React, { useState, useEffect } from 'react';

// const Example = () => {
//   const [data, setData] = useState([]);

//  const handleButton =()=> {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http//127.0.0.1:5000/');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }

//   return (
//     <div>
//       <h1>API Data</h1>
//       <button  onClick={handleButton}>send request</button>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Example;









// כמו של נועה!!!!----------
import React from "react";
import axios from "axios";
const Example = () => {
    //פונקציה שבודקת התחברות משתמש ומציגה לו אם קיים או לא במערכת
    const handleSubmit = () => {
        axios.get('http://127.0.0.1:5000/try').then((res) => {
            console.log(res)
        })
    };
    return (
        <div className="enterForm">
            <input type="button" value={"send request"} onClick={handleSubmit} />
        </div>
    );
};
export default Example;

// import React, { createContext, useState, useContext } from 'react';

// // יצירת הקונטקסט
// export const CardContext = createContext();

// // ספק הקונטקסט
// export const CardProvider = ({ children }) => {
//     const [cardState, setCardState] = useState({
//         CardNumber: "•••• •••• •••• ••••",
//         Name: "Your NAME",
//         cardStyle: "Default",
//         year: "•• ",
//         month: "••",
//     });

//     return (
//         <CardContext.Provider value={{ cardState, setCardState }}>
//             {children}
//         </CardContext.Provider>
//     );
// };

// // שימוש בקונטקסט
// // export const useCardContext = () => useContext(CardContext);

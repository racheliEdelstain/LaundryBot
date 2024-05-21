import './App.css';
import EnterToSiteForm from './landryBot/components/EnterToSite';
import LaundryBot from './landryBot/components/LaundryBot';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import Enrollment from './landryBot/components/Enrollment';
import Header from './landryBot/components/Header';
function App() {

  const navigate = useNavigate()
  return (
    <div className="App">

      <Header />
      <div className='dataInPage'>
        <Routes>
          <Route element={<EnterToSiteForm />} path="sign-in" />
          <Route index element={<EnterToSiteForm />} />
          <Route element={<LaundryBot />} path="laundry-bot" />
          <Route element={<Enrollment />} path="laundry-bot-enrollment" />


        </Routes>
      </div>
    </div>
  );
}

export default App;

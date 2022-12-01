
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpPage from "./Pages/SignUpPage"
import LoginPage from './Pages/LoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import Skillopedia from './Pages/Skillopedia';
import AdminDashboard from './Pages/AdminDashboard';
import AdminPendingRequest from './Components/AdminPendingRequest';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/forgotpassword' element={<ForgotPasswordPage />}></Route>
          <Route path="/skillopedia" element={<Skillopedia />}></Route>
          <Route path="/skillopedia/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/skillopedia/adminpendingrequest" element={<AdminPendingRequest />}></Route>
          <Route path="/skillopedia/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

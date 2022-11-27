
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpPage from "./Pages/SignUpPage"
import LoginPage from './Pages/LoginPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/forgotpassword' element={<ForgotPasswordPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

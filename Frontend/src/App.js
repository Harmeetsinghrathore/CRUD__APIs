
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import {Route, Routes, BrowserRouter} from 'react-router-dom';


import { Register } from './components/Register/Register';
import { Quote } from './components/QuoteDisplay/Quote';
import { Welcome } from './components/Welcome/Welcome';
import { Login } from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path='/quote' element={<Quote />} />
      <Route path='/register' element={<Register />} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

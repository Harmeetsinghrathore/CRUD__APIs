
import './App.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { AddQuote } from './component/AddQuote/AddQuote';
import { Dashboard } from './component/Dashboard/Dashboard';
import { Login } from './component/login/Login';
import { QuoteDisplay } from './component/QuoteDisplay/QuoteDisplay';
import { ViewAllQuotes } from './component/ViewAllQuotes/ViewAllQuotes';
import { EditQuote } from './component/EditQuote/EditQuote';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add-quote' element={<AddQuote />} />
        <Route path='/edit-quote' element={<EditQuote />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/quote-display' element={<QuoteDisplay />} />
        <Route path='/view-all-quotes' element={<ViewAllQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

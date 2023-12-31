import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Update from './components/Update';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

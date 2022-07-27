import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <h1> WELCOME</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

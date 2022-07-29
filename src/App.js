import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

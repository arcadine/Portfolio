import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Professional from './pages/professional/Professional';
import Personal from './pages/personal/Personal';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className="page-content d-flex flex-column justify-content-between">
        <Header />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/professional" element={<Professional/>} />
          <Route path="/Portfolio/personal" element={<Personal/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

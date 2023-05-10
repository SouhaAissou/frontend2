import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/forms/AddJob';
import FindJob from './components/FindJob';
import 'bootstrap/dist/css/bootstrap.min.css';
import HireTalent from './components/HireTalent';
// import EmployerFrom from './components/forms/EmployerForm';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddJob" element={<AddJob />} />
        <Route path="/FindJob" element={<FindJob />} />
        <Route path="/FindJob/:id" element={<FindJob />} />
        <Route path="/HireTalent/" element={<HireTalent />} />
        {/* <Route path='/EmployerFrom' element={<EmployerFrom/>}/> */}
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

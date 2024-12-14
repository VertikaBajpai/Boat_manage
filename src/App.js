
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ManageBoats from './pages/ManageBoats';
import ManageMeals from './pages/ManageMeals';
import ManagePricing from './pages/ManagePricing';
import ManageBookings from './pages/ManageBookings';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className='main-body'>
   <Sidebar/>
   <div className='main-content'> 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/manage-boats' element={<ManageBoats/>}></Route>
      <Route path='/manage-meals' element={<ManageMeals/>}></Route>
      <Route path='/manage-pricing' element={<ManagePricing/>}></Route>
      <Route path='/manage-bookings' element={<ManageBookings/>}></Route>
    </Routes>
   </div>
   </div>

    </div>
    </Router>
  );
}

export default App;

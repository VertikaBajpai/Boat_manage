
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ManageBoats from './pages/ManageBoats';

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
    </Routes>
   </div>
   </div>

    </div>
    </Router>
  );
}

export default App;

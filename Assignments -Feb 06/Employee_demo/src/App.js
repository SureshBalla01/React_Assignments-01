import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmployeeList from './components/employee-list.js';
import EmployeeForm from './components/employee-form.js';
import Header from './components/header.js';
function App() {
  return (
<BrowserRouter>
    <div className='APP'>
      <Header/>
      <EmployeeForm/>
      <div className='content'>
      <Routes>
        <Route path='/employeeform' element ={<EmployeeForm/>} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

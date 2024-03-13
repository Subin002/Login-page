import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
       <Router>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/get' element={<Table />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

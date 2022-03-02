
import './App.css';
import Homepage from './Homepage';
import Register from './Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
    
      <Route exact path='/' element={< Homepage/>}></Route>
      <Route exact path='/register' element={< Register/>}></Route>
          
</Routes>
</Router>
    
  );
}

export default App;

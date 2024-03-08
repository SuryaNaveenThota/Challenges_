import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ApiTimer from './Components/ApiTimer';
import DateRangePicker from './Components/DatePicker';

const NetelixirAssessment = () => (
  <div style={{
     display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh' 
    }}>

    <h1>Netelixir Assessment</h1>

    <Button component={Link} 
    to="/api-timer" 
    variant="contained" 
    color="primary" 
    style={{ margin: '10px' }}>
      Api Timer
    </Button>

    <Button component={Link}
    to="/date-picker" 
    variant="contained" 
    color="primary" 
    style={{ margin: '10px' }}>
      Date Picker
    </Button>
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NetelixirAssessment />} />
      <Route path="/api-timer" element={<ApiTimer />} />
      <Route path="/date-picker" element={<DateRangePicker />} />
    </Routes>
  </Router>
);

export default App;

import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/" style={{
      position: 'absolute',
      top: "2%",
      left: "5%",
      margin: '10px',
      textDecoration: 'none',
      color: 'black'
    }}>
      <Button 
      variant="contained"
      color="primary">
        Back
      </Button>
    </Link>
  );
};

export default BackButton;

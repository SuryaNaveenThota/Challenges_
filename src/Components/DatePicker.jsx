import React, { useState } from 'react';
import BackButton from './BackButton';

const DatePicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);

    if (!selectedStartDate) {
      setEndDate('');
    } else if (endDate && selectedStartDate > endDate) {
      setEndDate('');
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;
    setEndDate(selectedEndDate);

    if (startDate && selectedEndDate < startDate) {
      setStartDate('');
    }
  };

  const presentDay = new Date().toISOString().split('T')[0];

  return (
    <div style={{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       height: '100vh'
    }}>
      <h1 style={{ marginBottom: '20px' }}>
        Date Picker Solution
      </h1>

      <BackButton />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          style={{ margin: '20px' }}
          min={presentDay}
          max={endDate}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          style={{ margin: '20px' }}
          min={startDate}
          disabled={!startDate}
        />
      </div>
    </div>
  );
};

export default DatePicker;

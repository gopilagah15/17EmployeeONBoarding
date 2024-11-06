// components/EmployeeForm.js
import React, { useState } from 'react';

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, position, startDate, id: Date.now() });
    setName('');
    setPosition('');
    setStartDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Employee Details</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;

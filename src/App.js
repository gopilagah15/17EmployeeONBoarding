// App.js
import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import OnboardingChecklist from './components/OnboardingChecklist';
import ContractGeneration from './components/ContractGeneration';
import OnboardingStatusReport from './components/OnboardingStatusReport';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const handleUpdateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Employee Onboarding System</h1>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <OnboardingChecklist tasks={tasks} setTasks={handleUpdateTasks} />
      <ContractGeneration employees={employees} />
      <OnboardingStatusReport employees={employees} tasks={tasks} />
    </div>
  );
};

export default App;

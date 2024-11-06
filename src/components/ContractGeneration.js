// components/ContractGeneration.js
import React from 'react';

const ContractGeneration = ({ employees }) => {
  const handleGenerateContract = (employee) => {
    alert(`Contract generated for ${employee.name} - ${employee.position}`);
  };

  return (
    <div>
      <h2>Contract Generation</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <button onClick={() => handleGenerateContract(employee)}>Generate Contract</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractGeneration;

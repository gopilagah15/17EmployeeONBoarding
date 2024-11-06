// components/OnboardingStatusReport.js
import React from 'react';

const OnboardingStatusReport = ({ employees, tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div>
      <h2>Onboarding Status Report</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Overall Completion: {completionPercentage.toFixed(2)}%</p>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {completionPercentage}% onboarded
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnboardingStatusReport;

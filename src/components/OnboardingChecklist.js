// components/OnboardingChecklist.js
import React, { useEffect, useState } from 'react';

const OnboardingChecklist = ({ tasks, setTasks }) => {
  const defaultTasks = [
    { id: 1, task: 'Fill personal details', completed: false },
    { id: 2, task: 'Submit ID verification', completed: false },
    { id: 3, task: 'Complete training', completed: false }
  ];

  useEffect(() => {
    setTasks(defaultTasks);
  }, [setTasks]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div>
      <h2>Onboarding Checklist</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnboardingChecklist;

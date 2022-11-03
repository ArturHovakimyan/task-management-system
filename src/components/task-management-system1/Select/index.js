import React from "react";

const Select = ({ stateTasks, handleSelect, category}) => {
  return (
    <select defaultValue={category} onChange={(e)=> handleSelect(e.target.value)}>
      {stateTasks.map((task) => (
        <option key={task._id}>{task.category}</option>
      ))}
    </select>
  );
};

export default Select;

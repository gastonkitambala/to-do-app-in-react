export default Task;

import React from "react";

export default props => (
  <div className="task">
    <div className="task-name">{props.name}</div>
    <button className="del-btn"
    onClick={() => props.deleteTask(props.taskIndex)}>X</button>
  </div>
);
export default Header;

import React from "react";

export default props => {
  return (
    <div className="header">
      <input onChange={props.onTypeTask} placeholder="add a task" />
      <button className="btn-add" onClick={props.onAddTask}>
        +
      </button>
    </div>
  );
};
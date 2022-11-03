import React, { useState } from "react";
import Select from "../Select";

const TaskList = ({ dispatch, tasks, stateTasks}) => {
  const [stateInput, setStateInput] = useState({});

  const handleSelect = (category) => {
    setStateInput({...stateInput, category: category})
  }

  const handleComplidet = () => {
    dispatch({
      type: "complete",
      payload: { id: stateInput.id, title: stateInput.title, category: stateInput.category },
    });
    setStateInput({ id: null, title: "", category:""});
  };
  return (
    <>
      <div className="task-contener">
        {tasks.map((task) => {
          return (
            <div key={task._id}>
              <p>{task.status}</p>
              <p>{task.title}</p>
              <p>{task.category}</p>
              <p>{task.description}</p>
              {stateInput.id === task._id ? (
                <div className="editMod-box" >
                  <div className="editMod">
                    <input
                      type="text"
                      value={stateInput.title}
                      onChange={(e) =>
                        setStateInput({ ...stateInput, title: e.target.value })
                      }
                    />
                    <Select stateTasks={stateTasks} handleSelect={handleSelect} category={stateInput.category}/>
                    <div>
                    <button onClick={handleComplidet}>Add</button>
                    <button onClick={() => setStateInput({ id: null, title: "", category:""})}>
                      Cancel
                    </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <button onClick={() => setStateInput({ id: task._id, title: task.title,  category: task.category})}>
                {" "}
                Edit{" "}
              </button>{" "}
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;

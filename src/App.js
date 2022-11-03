/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { tasks } from "./API";
import React, { useReducer, useEffect } from "react";
import TaskList from "./components/task-management-system1/TaskList";

const ACTION = {
  done: "done",
  todo: "todo",
  blocked: "blocked",
  inprogres: "inprogres",
  complete: "complete"
};
const initialState = {
   tasks: tasks,
    done: [],
    todo: [], 
    blocked: [], 
    inprogres: []
  };
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.done:
      return {
        ...state,
        done: state.tasks.filter((task) => task.status === ACTION.done),
      };
    case ACTION.todo:
      return {
        ...state,
        todo: state.tasks.filter((task) => task.status === ACTION.todo),
      };
    case ACTION.blocked:
      return {
        ...state,
        blocked: state.tasks.filter((task) => task.status === ACTION.blocked),
      };
    case ACTION.inprogres:
      return {
        ...state,
        inprogres: state.tasks.filter(
          (task) => task.status === ACTION.inprogres
        ),
      };
    case ACTION.complete:{
      return {
        ...state,
          tasts: state.tasks.map(task => {
            if(task.category === action.payload.category){
                task.title = action.payload.title
            }
            return task
        }),
      };
    }
    default:{
      return state;
    }
      
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    state.tasks.map((task) => dispatch({ type: task.status }));
  }, []);
  return <div className="App">
    <TaskList dispatch={dispatch} tasks={state.blocked} stateTasks={state.tasks}/>
    <TaskList dispatch={dispatch} tasks={state.todo} stateTasks={state.tasks}/>
    <TaskList dispatch={dispatch} tasks={state.inprogres} stateTasks={state.tasks}/>
    <TaskList dispatch={dispatch} tasks={state.done} stateTasks={state.tasks}/>
  </div>;
}

export default App;

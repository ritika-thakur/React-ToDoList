import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete'; 
import {todos} from "../db.json";

function Note(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    props.onDelete(props.id);
  }
  function taskCompleted(){
    setIsDone((prevValue) => {
      return !prevValue;
    })
  }


  return (
    <div className="note">
      <h1 style={{ textDecoration: isDone ? "line-through" : "none" }}
        onClick={taskCompleted}>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/fab";
import Zoom from "@material-ui/core/Zoom"
import { Hidden } from "@material-ui/core";
import {todos} from "../db.json";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });

    
  }

  function expand(event){
    setIsExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Create Task..."
          rows= { isExpanded ? "4" : "1" }
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;

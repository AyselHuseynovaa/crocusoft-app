import React, {useContext} from 'react'
import Paper from "@material-ui/core/Paper"; 
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
const {addTodo} = useContext(TodosContext)
  return (
    <Paper>
      <form onSubmit={(e)=>{
    e.preventDfault()
    addTodo(value);
    reset()

      }}
       >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}

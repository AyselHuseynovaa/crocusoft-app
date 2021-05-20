import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit";
import ListItemSeconadryAction from "@material-ui/core/ListItemSecondaryAction";
import useTogglestate from "../hooks/useTogglestate";

export default function TodoItem(id,task,completed) {
  const {editTodo,toggleTodo ,removeTodo} = useContext(TodosContext)
  const [isEditing, toggle] = useTogglestate(false);

  return (
    <ListItem>
      {  isEditing 
       ? <editTodoForm editTodo ={editTodo} id={id} task={task} toggleEditForm={toggle}/>
       :
        (
          <>
        <ListItemText>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <TodoItem />
          <ListItemSeconadryAction>
            <IconButton onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSeconadryAction>
        </ListItemText>
        </>
      )}
    </ListItem>
  );
}

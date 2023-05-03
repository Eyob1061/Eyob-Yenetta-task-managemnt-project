import React,{useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { addNewTodo } from '../redux/actions';
import { useDispatch } from "react-redux"

const TodoForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("")

    const onFormSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');
  }

    const onInputChange = (e) =>{
            setText(e.target.value)
           
    }
  return (
    <Container>
      <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new task..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
      </form>
    </Container>
  )
}

export default TodoForm
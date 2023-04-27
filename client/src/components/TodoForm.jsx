import React,{useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { addNewTodo } from '../redux/actions';
import { useDispatch } from "react-redux"

const TodoForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("")

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTodo(text));
        
    }
    const onInputChange = (e) =>{
            setText(e.target.value)
            console.log(text)
    }
  return (
    <Container className='mt-4'>
        <form 
        className='form'
        onSubmit={onFormSubmit}
        >
            <input 
            placeholder='enter your task'
            className='input'
            onChange={onInputChange}
            />
        </form>
    </Container>
  )
}

export default TodoForm
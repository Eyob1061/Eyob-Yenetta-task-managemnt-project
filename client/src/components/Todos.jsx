import React, {useEffect} from 'react';
import { getAllTodos } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';


const Todos = () => {
  const dispatch  = useDispatch()
  const todos = useSelector(state => state.todos)
  console.log(todos)
  useEffect(() =>{
    dispatch(getAllTodos())
  },[])

  return (
    <Container>
      {
        todos.map((item) =>{
          return(
            <Card className='mt-3' key={item._id}>
                <Card.Body className='d-flex justify-content-between'>
                  <div>
                    <p>{item.data}</p>
                  </div>
                  <div>
                  <span className='mx-2 cursor-pointer'>
                    <i
                    style={{color: "red", cursor: "pointer"}}
                    className='fas fa-trash'/></span>
                  <span><i
                    style={{color: "blue", cursor: "pointer"}}
                   className='fas fa-pen'/></span>
                  </div>
                </Card.Body>
            </Card>
          )
        })
      }
    </Container>

  )
}

export default Todos
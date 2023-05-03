import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
function App() {
  return (
    <div
    style={{marginLeft: "50%"}}
    className='d-flex justify-content-center align-item-center w-100'>
        <div className="App w-100">
        <Header/>
        <TodoForm />
        <Todos />
    </div>
    </div>
  );
}

export default App;

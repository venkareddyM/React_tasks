import Counter from './counter/Counter';
import Todo from './todolist/Todo';
import './App.css';
import UserList from './pagination/UserList';
import Login from './validation/Login';
import Parent from './props/Parent';

function App() {
  return (
    <div className="App">
      <div>
        <Login />
      </div>
      <div>
        <Counter />
      </div>

      <div>
        <Todo />
      </div>

      <div>
        <UserList />
      </div>

      <div>
        <Parent/>
      </div>

    </div>
  );
}
export default App;

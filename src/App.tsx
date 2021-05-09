import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <NavLink to={'/users'} >
          Users
      </NavLink>{' '}
        <NavLink to={'/todos'} >
          Todos
      </NavLink>
      </div>
      <div>
        <Route path={'/users'} >
          <UserPage />
        </Route>
        <Route path={'/todos'} >
          <TodosPage />
        </Route>
        <Route path={'/user/:id'} >
          <UserItemPage />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App

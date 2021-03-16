import { Card } from 'react-bootstrap';
import { Login } from './components/Login';
import { useStateValue } from './StateProvider';
import './styles/app.css'
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom'
import { useEffect } from 'react';
import { Question } from './components/Question.jsx';


const init = () => {
  return localStorage.getItem('user') || { logged: false };
}

function App() {

  const [{ user }, dispatch] = useStateValue();

  const userName = init();


/*   useEffect(() => {
    localStorage.setItem('user', user);
    console.log(user);
  }, [user]);
 */


  return (
    <div className="App">
      <Router>
        <Switch>
          {
            !user ?
              (
                <>
                <Route path="/login">
                  <Login />
                </Route>
                <Redirect to="/login" push/>
                </>
              ) :
              (
                <>
                <Route path="/Test" exact push>
                   <Question />
                </Route>
                <Route path="/404"  >
                  <h1>Pagina no encontrada</h1>
                </Route>
                </>
              )
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;

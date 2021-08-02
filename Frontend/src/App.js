import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Redirect } from 'react-router-dom' 
import 'react-toastify/dist/ReactToastify.css';  
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ClientsList from './components/clients/ClientsList'
import AddClient from './components/clients/AddClient'
import UpdateClient from './components/clients/UpdateClient'
import Protected from './components/auth/Protected'


function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Route exact path="/">
          <Redirect to="/allClients" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/allClients">
        <Protected Cmp={ClientsList} />
      </Route>
      <Route path="/addClient">
        <Protected Cmp={AddClient} />
      </Route>
      <Route path="/updateClient/:clientId">
      <Protected Cmp={UpdateClient} />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

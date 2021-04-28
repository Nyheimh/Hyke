import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './screens/Register'
import Login from './screens/Login'
import { useState } from 'react';
import { loginUser, registerUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null) //null for objects empty string for arrays
  const history = useHistory()


  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login
            handleLogin={handleLogin}
            />

          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}/>
          </Route>
        </Switch>
      {/* <Layout /> */}
      </Layout>
    </div>
  );
}

export default App;

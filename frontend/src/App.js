import './App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './screens/Register/Register'
import Login from './screens/Login/Login'
import MainContainer from './container/MainContainer'

import { useState, useEffect } from 'react';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null) //null for objects empty string for arrays
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData);
    }
    handleVerify()
  },[])

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

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
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
          <Route path='/'>
            <MainContainer />

          </Route>
        </Switch>
      {/* <Layout /> */}
      </Layout>
    </div>
  );
}

export default App;

import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './screens/Register'
import { useState } from 'react';
import { loginUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null) //null for objects empty string for arrays

  const handleLogin = async (formData) => {
    const userData = await loginUser
    setCurrentUser(userData);
  }
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/register'>
            <Register
            handleLong={handleLogin}
            />

          </Route>
        </Switch>
      {/* <Layout /> */}
      </Layout>
    </div>
  );
}

export default App;

import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Register from './screens/Register'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/register'>
            <Register />

          </Route>
        </Switch>
      {/* <Layout /> */}
      </Layout>
    </div>
  );
}

export default App;

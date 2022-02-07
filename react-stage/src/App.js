import './App.css';
import Navbar from './component/navbar/NavbarHTML'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInfo from './contexts/UserInfo'
import Login from './component/loginUser/LoginUser'




function App() {
  return (
    <Router>
      <div className="App">
        <UserInfo>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/login"><Login /></Route>

            </Switch>
          </div>
        </UserInfo>
      </div>

    </Router>
  );
}


export default App;

import './App.css';
import Navbar from './component/navbar/NavbarHTML'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInfo from './contexts/UserInfo'
import Login from './component/loginUser/LoginUser'
import CreateAccount from './component/createAccount/CreateAccount'
import CreateOrganisation from './component/createAccount/createOrganisation/CreateOrganisation'
import CreateParticipant from './component/createAccount/createParticipant/CreateParticipant'




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
              <Route exact path="/createAccount"><CreateAccount /></Route>
              <Route exact path="/createOrganisation"><CreateOrganisation /></Route>
              <Route exact path="/createParticipant"><CreateParticipant /></Route>

            </Switch>
          </div>
        </UserInfo>
      </div>

    </Router>
  );
}


export default App;

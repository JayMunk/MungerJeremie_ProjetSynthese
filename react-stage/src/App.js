import './App.css'
import Navbar from './component/navbar/NavbarHTML'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInfo from './contexts/UserInfo'
import Login from './component/loginUser/LoginUser'
import CreateOrganisation from './component/createAccount/createOrganisation/CreateOrganisation'
import CreateParticipant from './component/createAccount/createParticipant/CreateParticipant'
import CreateCheval from './component/createAccount/createCheval/CreateCheval'
import MyHorses from './component/MyHorses'
import CreateCompetition from './component/Competition/createCompetition/CreateCompetition'
import AfficherCompetitionOrganisation from './component/Competition/afficherCompetition/AfficherCompetitionOrganisation'
import AfficherCompetition from './component/Competition/afficherCompetition/AfficherCompetition'
import Sinscrire from './component/Competition/Sinscrire'
import VoirLiveCompetition from './component/Competition/voirLiveCompetition/VoirLiveCompetition'




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
              <Route exact path="/createOrganisation"><CreateOrganisation /></Route>
              <Route exact path="/createParticipant"><CreateParticipant /></Route>
              <Route exact path="/createCheval"><CreateCheval /></Route>
              <Route exact path="/myHorses"><MyHorses /></Route>
              <Route exact path="/createCompetition"><CreateCompetition /></Route>
              <Route exact path="/afficherCompetition"><AfficherCompetition /></Route>
              <Route exact path="/afficherCompetitionOrganisation"><AfficherCompetitionOrganisation /></Route>
              <Route exact path="/sinscrire"><Sinscrire /></Route>
              <Route exact path="/voirLiveCompetition"><VoirLiveCompetition /></Route>
            </Switch>
          </div>
        </UserInfo>
      </div>

    </Router>
  )
}

export default App
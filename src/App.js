import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm';
import Team from './components/Team';

function App() {
  const [team, setTeam]= useState([{
    id: 0, 
    name:'Ous',
    email:'coder@lambda.com',
    role:'Full Stack Web Dev'
},{
  id: 1,
  name:'Suo',
  email:'redoc@adbmal.com',
  role:'Sull Ftack Deb Wev'
}]);
const addTeamMember= person => {
  const newTeam = {
    id: Date.now(),
    name: person.name,
    email: person.email,
    role: person.role
  };
  setTeam([...team, person]);
};

  return (
    <div className="App">
      <TeamForm addTeamMember={addTeamMember}/>
      <Team team={team}/>
    </div>
  );
}

export default App;

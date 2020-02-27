import React, {useState} from "react";

const TeamForm= props => {
    const [team, setTeam]= useState({
        name:'',
        email:'',
        role:''
    });

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMember(team);
        setTeam({
            name:'',
            email:'',
            role:''
        });
    };

    const handleChanges = e => {
        setTeam({
          ...team,
          [e.target.name]: e.target.value
        });

      };
    return (
        <form onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={team.name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={handleChanges}
            value={team.email}
          />
        <label htmlFor="role">Role</label>
          <input
            id="role"
            name="role"
            onChange={handleChanges}
            value={team.role}
          />

          <button type="submit">Add Team Member</button>
        </form>
      );
};
export default TeamForm;
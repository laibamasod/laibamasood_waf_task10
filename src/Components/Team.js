import React, { useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [team_name, setTeamName] = useState('');
  const [team_head, setTeamHead] = useState('');

  const handleChange1 = (event) => {
    setTeamName(event.target.value);
  };

  const handleChange = (event) => {
    setTeamHead(event.target.value);
  };

  const handleSubmit = (event) => {
    if (team_name === '' || team_head === '') {
      alert('Fields are required for team creation');
      return;
    }

    event.preventDefault();

    const data = {
      team_name: team_name,
      team_head: team_head,
      date_created: new Date().toLocaleString(), // Get the current date
    };

    axios
      .post('http://localhost:8080/createTeam', data)
      .then((res) => {
        if (res.data) {
          window.location.reload();
          alert('New Team Created Successfully');
          setTeamName('');
          setTeamHead('');
         
        } else {
          console.log('Error in creating team');
        }
      })
      .catch((err) => console.log('Error in creating team ', err));
  };

  return (
    <div className="main">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Team</h1>
        </div>
        <div>
          <label htmlFor="team_name">Team Name</label>
          <input
            id="team_name"
            name="teamname"
            type="text"
            value={team_name}
            onChange={handleChange1}
            placeholder="Team Name"
          />
          <label htmlFor="team_name">Team Head</label>
          <input
            id="team_head"
            name="teamhead"
            type="text"
            value={team_head}
            onChange={handleChange}
            placeholder="Team Head"
          />
          <div className="button-container">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function ViewTeams() {
  const [viewteams, setTeams] = useState([]);
  
  const fetchTeams = () => {
    axios
      .get('http://localhost:8080/getTeams')
      .then((res) => {
        const data = res.data;
        setTeams(data);
      })
      .catch((err) => {
        console.log('Error in getting teams ', err);
      });
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <h2>View Teams</h2>
      <ul>
        {viewteams.map((team, index) => (
          <li key={index}>
            <strong>Team Name:</strong> {team.team_name}<br />
            <strong>Team Head:</strong> {team.team_head}<br />
            <strong>Date Created:</strong> {team.date_created}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

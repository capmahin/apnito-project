import React from "react";

import member1 from '../../image/assists/clinet/client.jpg'
import Teams from './Teams';

const teams = [
  { id: 1, name: "john corner", img: member1 },
  { id: 2, name: "john corner", img: member1 },
  { id: 3, name: "john corner", img: member1 },
  { id: 4, name: "john corner",  img: member1 },
  
];

const Team = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-warning text-center mt-4">Our Team</h2>
      <div className="row d-flex justify-center">
        {teams.map((team) => (
          <Teams key={team.id} team={team}></Teams>
        ))}
      </div>
    </div>
  );
};

export default Team;
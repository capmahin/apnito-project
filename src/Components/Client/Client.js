import React from "react";
import Clients from './Clients';


const clients = [
  { id: 1, name: "john corner",  },
  { id: 2, name: "john corner",  },
  { id: 3, name: "john corner", },
  { id: 4, name: "john corner",  },
  { id: 5, name: "john corner",  },
  { id: 6, name: "john corner", },
];

const Client = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-warning text-center mt-5">Our Clients</h2>
      <div className="row">
        {clients.map((client) => (
          <Clients key={client.id} client={client}></Clients>
        ))}
      </div>
    </div>
  );
};

export default Client;
import React from "react";


const Teams = ({ team }) => {
  const { name,img } = team;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-6">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title text-warning">{name}</h4>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, excepturi. At, eius autem fugiat 
          </p>

        </div>
      </div>
    </div>
  );
};

export default Teams;
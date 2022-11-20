import React from "react";

const Clients = ({ client }) => {
  const { name } = client;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "18rem" }}>
        {/* <img src={img} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5 className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, excepturi. At, eius autem fugiat consequuntur et praesentium asperiores? Nam sunt quae provident cupiditate error ipsam, excepturi laborum perspiciatis facilis distinctio.
          </h5>
         
        </div>
      </div>
    </div>
  );
};

export default Clients;
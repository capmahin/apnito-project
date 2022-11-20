import React from "react";
import styles from "./Clinet.module.css";

const Clients = ({ client }) => {
  const { name,img } = client;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title text-warning">{name}</h4>
          <h5 className='text-success'>"Comments":</h5>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, excepturi. At, eius autem fugiat 
          </p>
          <button className={`${styles["review-button"]} me-4`}>
              Review
            </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
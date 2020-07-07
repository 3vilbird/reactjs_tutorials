import React from "react";

const Card = ({
  imageSource ="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  title = "baseball",
  info = "something goes here",
  ButtonText = "text here"
}) => (
  <div className="col-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageSource} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info}</p>
        <a href="#" className="btn btn-success">
          {ButtonText}
        </a>
      </div>
    </div>
  </div>
);

export default Card;

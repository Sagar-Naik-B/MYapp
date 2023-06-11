import React from "react";

const Success = ({ setSucces }) => {
  return (
    <div>
      <h1 style={{ fontSize: "4rem" }}>success</h1>
      <button onClick={() => setSucces(false)}>Log out</button>
    </div>
  );
};

export default Success;

import React from "react";
import {useRouteError} from "react-router-dom"
const Error = () => {
  const {status,data}= useRouteError()

  return (
    <>
      <h2>Oops!!!</h2>
      <h3>You are Lost!!!</h3>
      <p>`Error {status} : {data }`</p>
    </>
  );
};

export default Error;

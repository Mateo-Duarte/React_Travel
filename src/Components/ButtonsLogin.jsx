import React from "react";
import { Link } from "react-router-dom";

export const ButtonsLogin = () => {
  return (
    <div className="container-buttons">
      <h3>
        <span>Travel</span>App
      </h3>
      <div className="buttons">
        <button className="btn-login"><Link to="/loginV" className='a'>Login</Link></button>
        <button className="btn-register"><Link to="Register" className="register">Register</Link></button>
        <Link rel="stylesheet" className="help" href={'/'}> Need help? </Link>
      </div>
  
    </div>
  );
};

import React from "react";
// import React, { Component } from "react";
import Button from "../Forms/Button/Button";
import "./signin.scss";
import { signInWithGoogle } from "../../firebase/utils";

const SignIn = () => {
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    


  return (
    <div className="signIn">
      <div className="wrap">
        <h2>Login</h2>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <div className="socialSignIn">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

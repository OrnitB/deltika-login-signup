import React, { useState } from "react";
import "../App.css";

const Welcome = () => {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const handleSignUpButton = () => {
    setIsContainerActive(false);
  };
  const handleSignInButton = () => {
    setIsContainerActive(true);
  };

  return (
    <div>
      <div
        className={`container${isContainerActive ? " right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            {/* <div className="social-container">
              <a href="#" className="social">
                <i className="bi bi-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span> */}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span> */}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Pick up where you left off</p>
              <button
                className="ghost"
                id="signIn"
                onClick={handleSignUpButton}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Sign up to find out what guides your AI’s predictions and make
                smarter decisions
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={handleSignInButton}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

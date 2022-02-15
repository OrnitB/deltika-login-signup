import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase-config";

const Welcome = () => {
  console.log();
  const [isContainerActive, setIsContainerActive] = useState(false);
  const handleSignUpButton = () => {
    setIsContainerActive(false);
  };
  const handleSignInButton = () => {
    setIsContainerActive(true);
  };

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert(`Currently logged in: ${auth.currentUser.email}`);
      setUser(auth.currentUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      alert(`Currently logged in: ${auth.currentUser.email}`);
      setUser(auth.currentUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logged out successfully");
  };

  return (
    <div>
      {auth.currentUser ? (
        <div className="loggedInButtonInfo">
          <div>Currently logged in: {user?.email}</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}
      <div
        className={`container${isContainerActive ? " right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create new Account</h1>
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
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setRegisterUsername(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button onClick={register}>Sign Up</button>
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
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <a href="#">Forgot your password?</a>
            <button onClick={login}>Sign In</button>
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

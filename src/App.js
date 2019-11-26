import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import logo from "./assets/me.jpg";
import facebook from "./assets/facebook.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import medium from "./assets/medium.svg";
import twitter from "./assets/twitter.svg";
import "./App.css";
import Button from "./Button";
function App() {
  const click = () => {
    setNightmode(!nightmode);
  };
  
  //
  const [nightmode, setNightmode] = useLocalStorage(true);
  return (
    <div className={nightmode ? "Night" : "Day"}>
      <div className="Nightmode">
        <Button checked={nightmode} handleClicked={click} />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="me" />
          <h2 className="Name">Thomas Kjær-Rasmussen</h2>
          <i className="Tagline">
            Frontend Nerd in Fintech{" "}
            <span role="img" aria-label="Tada">
              🎉
            </span>
          </i>
          <div className="Socials">
            <a
              href="https://twitter.com/ThomasR______"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="Social" alt="Twitter" />
            </a>
            <a
              href="https://medium.com/@vvvsejvvv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={medium} className="Social" alt="Medium" />
            </a>
            <a
              href="https://github.com/icew1nd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="Social" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-kj%C3%A6r-rasmussen-8428a954/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="Social" alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100001125740147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="Social" alt="Facebook" />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

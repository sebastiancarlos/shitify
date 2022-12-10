import { useState } from "react";
import "./App.css";
import { GithubLogo } from "./GithubLogo";
import { Bsod } from "./Bsod";

function App() {
  const [logoWasClicked, setLogoWasClicked] = useState(false);
  const handleLogoClick = () => {
    if (!logoWasClicked) {
      alert("You clicked the logo!");
      setLogoWasClicked(true);
    } else {
      alert("You clicked the logo again, you must be some kind of badass!");
    }
  };

  const [shouldRenderBsod, setShouldRenderBsod] = useState(false);
  const handleButtonClick = () => {
    setShouldRenderBsod(true);
  };
  return (
    <div className="App">
      <div className="background-image" />
      <div className="background-blur" />
      <div className="logo">
        <img
          onClick={handleLogoClick}
          src="pile-of-poo.webp"
          alt="poop"
          className="poop"
        />
        <h1>.js</h1>
      </div>
      <GithubLogo />
      {shouldRenderBsod && <Bsod />}
      <h1>SHITIFY.JS</h1>
      <h2>
        The Reverse Linter that <br />
        Adds Errors to Your Code
      </h2>
      <div className="button-container">
        <button className="main" onClick={handleButtonClick}>
          Get Started
        </button>
        <button onClick={handleButtonClick}>Why Shitify?</button>
      </div>
    </div>
  );
}

export default App;

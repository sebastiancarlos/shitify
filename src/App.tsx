import { useEffect, useState } from "react";
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle("inViewport", entry.isIntersecting);
      });
    });
    document.querySelectorAll(".animateOnViewport").forEach((el) => {
      observer.observe(el);
    });
  });

  return (
    <div className="App">
      <section className="main">
        <div className="background-image" />
        <div className="background-blur" />
        <div className="logo animateOnViewport">
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
        <h1 className="animateOnViewport">SHITIFY.JS</h1>
        <h2 className="gradient-text animateOnViewport">
          The Reverse Linter that <br />
          Adds Errors to Your Code
        </h2>
        <div className="button-container animateOnViewport">
          <button className="main" onClick={handleButtonClick}>
            Get Started
          </button>
          <button onClick={handleButtonClick}>Why Shitify?</button>
        </div>
      </section>
      <section>
        <h3 className="gradient-text animateOnViewport">Shittier than Shit</h3>
        <p className="animateOnViewport">
          It's time for a new beginning in shit code for the entire web
          ecosystem. ESLint has been downloaded over 3 billion times. It's
          become an integral part of for the web. But it's time to go all-in on
          shit.
        </p>
        <div className="box-container animateOnViewport">
          <div className="box">
            <img className="icon" src="bars-icon.svg" />
            <h3>Shittier by numbers</h3>
            <p>
              There are a lot of benchmarks out there but believe me, most are
              shit. Shitify does it better, trust me bro.
            </p>
          </div>
          <div className="box">
            <img className="icon" src="ecosystem-icon.svg" />
            <h3>Ecosystem-friendly</h3>
            <p>
              Get out-of-the-box support for TypeScript, CoffeeScript, and
              LigmaScript.
            </p>
          </div>
          <div className="box">
            <img className="icon" src="lightning-icon.svg" />
            <h3>Blazingly Fast</h3>
            <p>
              Sometimes it's not only about the speed of your code, but the
              speed of your errors. Move fast and break things.
            </p>
          </div>
          <div className="box">
            <img className="icon" src="multi-icon.svg" />
            <h3>Best for Mutation Testing</h3>
            <p>
              It's not all shits and giggles. Shitify is the best tool for
              mutation testing. This is our one legit use case.
            </p>
          </div>
          <div className="box">
            <img className="icon" src="server-icon.svg" />
            <h3>Deploy once, shit forever</h3>
            <p>
              Deploy on AWS, Azure, Google, or even on Elon Musk's personal
              server on freakin' Mars.
            </p>
          </div>
          <div className="box">
            <img className="icon" src="nextjs-icon.svg" />
            <h3>Next.js support</h3>
            <p>
              Shitify has first-class support for Next.js. Make of that what you
              will.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="gradient-text animateOnViewport">
          Let's get our shit together
        </h2>
        <p className="animateOnViewport">
          Folks, I'm proud to recognize the amazing work of the developers
          behind Shitify.js. This innovative library has enabled countless
          developers to create incredible projects, and it's a testament to the
          power of open-source software collaboration.
        </p>
        <p className="animateOnViewport">
          Now, more than ever, we must recognize the opportunities and dangers
          that AI and machine learning present. Human developers are the
          cornerstone of our nation's technological future. If we are to remain
          competitive and continue to build the kind of world-changing
          applications we all want to see, then it's critical that we protect
          the jobs of those who create our digital infrastructure. In fact,
          Michelle and I are proud to have outlined policies that support the
          growth of open-source software.
        </p>
        <p className="animateOnViewport">
          Shitify.js is a great example of how open-source collaboration can be
          a powerful tool to help us build a better world. I'm confident that,
          with the dedicated developers and users behind this library, we can
          create even more amazing things in the months and years to come.
        </p>
        <div className="signature animateOnViewport">
          <div className="image-container">
            <img src="obama.webp" alt="obama" />
          </div>
          <div className="name-container">
            <img
              className="pen"
              src="obama-signature.svg"
              alt="obama signature"
            />
            <p className="name">
              Barack Obama
              <span className="title">44th President of the United States</span>
            </p>
          </div>
        </div>
        <button className="main animateOnViewport" onClick={handleButtonClick}>
          Start Shitting
        </button>
      </section>
      <section className="footer">
        <div className="logo">
          <img
            onClick={handleLogoClick}
            src="pile-of-poo.webp"
            alt="poop"
            className="poop"
          />
          <h1>.js</h1>
        </div>
        <p className="copyright">© 2022 Shitify, Inc. All rights reserved.</p>
      </section>
    </div>
  );
}

export default App;

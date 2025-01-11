import React from "react";

function Hero() {
  return (
    <div>
      <h1 className="stopme">STOP ME>>> </h1>
      <img
        id="pfp"
        src="public/image-modified.png"
        alt="A picture of me"
        title="Okay! You win..."
      />
      <h1 className="name">Ahnaf Zaman</h1>
      <button data-tooltip="React JS + Vite + HTML +  CSS">
        console.log(<span className="stringfield">`Front-End Developer`</span>
        );👈
      </button>
      <button data-tooltip2="Selenium + Java + TestNG + Cucumber">
        System.out.println(
        <span className="stringfield">"QA Automation Engineer"</span>);👈
      </button>
      <p className="aboutme">
        <span className="quotes">"</span>Hello, my name is Ahnaf Zaman, a
        software engineer based in New York City. <br />
        Currently, working as an Automation Engineer on web based applications.{" "}
        <br />I have also built web applications and working on a project right
        now...<span className="quotes">"</span>
      </p>
    </div>
  );
}
export default Hero;

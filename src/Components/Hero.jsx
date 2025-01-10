import React from "react";

function Hero() {
  return (
    <div>
      <h1 className="name">Ahnaf Zaman</h1>
      <button data-tooltip="React JS + Vite + HTML +  CSS">
        console.log(`Front-End Developer`);👈
      </button>
      <button data-tooltip2="Selenium + Java + TestNG + Cucumber">
        System.out.println("QA Automation Engineer");👈
      </button>
    </div>
  );
}
export default Hero;

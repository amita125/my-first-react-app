import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let programming = [
    {
      id: 0,
      name: "C++",
      skill: "Intermediate level",
    },
    {
      id: 1,
      name: "C",
      skill: "Beginner level",
    },
    {
      id: 2,
      name: "Javascript",
      skill: "Intermediate level",
    },

  ];

  return (
    <div className="App">
      <header className="App-header">
        <h2>Igor Krzywak: Futureproof trainee full stack Web Developer</h2>
        <h3>github profile:</h3>
        <a
          className="App-link"
          href="https://github.com/igork172"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span>https://github.com/igork172</span>
        </a>
      </header>
      <div className="programmingLanguage">
        <p className="intro">
        I was born in a city of Gorzow Wielkopolski in Poland. As a child, I was highly active in sports especially in football. Unfortunately an injury to my knee prevented me from playing further.  At the age of nine, I journeyed for the first time with my father on one of his longer expeditions as Captain of a container ship. When I was 14 I spent one year in South Korea, as a student of Okpo International School, significantly improved my English and achieved well in the Cambridge checkpoint exams. When I graduated high school at the age of 18 I left Poland and moved to Cardiff, United Kingdom to pursue a degree in Engineering at Cardiff University.<br />
        Currently I am University Graduate looking for a job in Technology Industry. I have recently moved to London where I plan to start my career. As a constantly developing discipline, I am positive that the challenges of Technology will never become tiresome, and the opportunity to develop advanced knowledge and skills at a prestigious UK company, will leave me well equipped for the task of achieving my goals.

        </p>
        <ul>
          {programming.map(function (item) {
            return (
              <li key={item.id}>
                {item.name} <span> Skill Level : {item.skill}</span>
              </li>
            );
          })}
        </ul>
        <h3>Github projects: </h3>
        <ul>
          <li> <a
          className="App-link"
          href="https://github.com/igork172/project-1-futureproof"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span>https://github.com/igork172/project-1-futureproof</span>
        </a> </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let programming = [
    {
      id: 0,
      name: "programming1",
      skill: "2",
    },
    {
      id: 1,
      name: "programming2",
      skill: "2",
    },
    {
      id: 2,
      name: "programming3",
      skill: "2",
    },
    {
      id: 3,
      name: "programming4",
      skill: "2",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>Dummy</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
          <span>https://reactjs.org</span>
        </a>
      </header>
      <div className="programmingLanguage">
        <p className="intro">
          anything about yourself please do fill more to add
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
      </div>
    </div>
  );
}

export default App;

import React from "react";
// import logo from "./logo.svg";
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
        <p>
          Name: <br></br>JobTitle :{" "}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <span>https://reactjs.org</span>
        </a>
      </header>
      <div class="main">
        <div className="introduction">
          <p className="intro">
            anything about yourself please do fill more to add:
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            perferendis rerum culpa provident eius possimus aperiam consequatur
            hic. Dicta officiis saepe et mollitia numquam quos eligendi
            excepturi fuga laborum eius.Illum quam molestiae quibusdam expedita
            earum similique minima consectetur totam distinctio amet temporibus
            fugit eius pariatur quidem consequatur sunt repellat, aspernatur
            ipsam aliquam quisquam. Ea voluptatum incidunt adipisci maxime
            libero!
          </p>
        </div>
        <div className="programming">
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
    </div>
  );
}

export default App;

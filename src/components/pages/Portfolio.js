import React from "react";
import "./assets/portfolio.css";

export default function Portfolio() {
  return (
    <section class="flex-item" id="Work">
      <h2>Portfolio</h2>
      <div class="box-container">
        <a
          href="https://trealtye20.github.io/Password/"
          class="box-item password"
        >
          <div>
            <h4>Password Generator</h4>
            <span>Javascript/html/css</span>
          </div>
        <a href="https://github.com/trealtye20/Password">Github: Password Generator</a>
        </a>
        

        <a
          href="https://trealtye20.github.io/Day-Planner/"
          class="box-item day"
        >
          <div>
            <h4>Day-Planner</h4>
            <span>html/bootstrap/jquery</span>
          </div>
          <a href="https://github.com/trealtye20/Day-Planner">Github: Day-Planner</a>
        </a>

        <a href="https://notetaker-te.herokuapp.com/" class="box-item misc1">
          <div>
            <h4>Notetaker</h4>
            <span>html/css/javascript/nodejs</span>
          </div>
          <a href="https://github.com/trealtye20/NoteTaker">Github: NoteTaker</a>
        </a>
        <a
          href="https://rbc-mental-health-track.herokuapp.com/"
          class="box-item misc2"
        >
          <div>
            <h4>Mental Health Tracker</h4>
            <span>html/css/javascript/mysql</span>
          </div>
          <a href="https://github.com/trealtye20/Mental-Health-Tracker">Github: Mental Health Tracker</a>
        </a>

        <a
          href="https://stevekoutsodontis.github.io/Barker/"
          class="box-item bark"
        >
          <div>
            <h4>Barker</h4>
            <span>html/materialize/css/javascript</span>
          </div>
          <a href="https://github.com/SteveKoutsodontis/Barker">Github: Barker</a>
        </a>
        <a
          href="https://trealtye20.github.io/Code-Quiz/"
          class="box-item quiz"
        >
          <div>
            <h4>Code Quiz</h4>
            <span>html/css/javascript</span>
          </div>
          <a href="https://github.com/trealtye20/Code-Quiz">Github: Code Quiz</a>
        </a>
      </div>
    </section>
  );
}

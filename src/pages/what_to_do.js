import React from "react";
import Link from "gatsby-link";

import ColorSquare from "../components/colorSquare";

let testCases = [
  { color: "green", size: 120 },
  { color: "yellow", size: 100 },
  { color: "red", size: 80 },
  { color: "papayawhip", size: 70 },
  { color: "purple", size: 50 },
  { color: undefined, size: -50 },
  { color: null, size: 50 },
  { color: null, size: null },
  { color: undefined, size: undefined }
];

const WhatToDo = () => (
  <div>
    <h1>Let's Play a Game!</h1>
    <div>
      <b>Rules</b>
      <ol>
        <li>
          First we will build a stateless component (called <tt>ColorSquare</tt>)
        </li>
        <li>
          Then we will do a group code review together and discuss general
          design decisions
        </li>
        <li>
          After that we will seemlessly integrate BuckleScript in this
          project...
        </li>
        <li>
          ... and build the very same <tt>ColorSquare</tt> component in
          ReasonReact
        </li>
      </ol>
    </div>
    <div>
      <b>Hints:</b>
      <ul>
        <li>
          Create a file <tt>./src/components/colorSquare.js</tt>
        </li>
        <li>
          You'll find some boilerplate for the BuckleScript config in this
          repo's{" "}
          <a
            target="_blank"
            href="https://github.com/ryyppy/reason-workshop-gatsby#reason-workshop-gatsby"
          >
            README
          </a>
        </li>
        <li> Use React's inline-styles for the sake of brewity </li>
        <li>
          {" "}
          Make sure to write this component as an ES6 module (default export
          required)
        </li>
        <li>
          Tests will automatically render the component on this page, so make
          sure your code doesn't break your site (for easy debugging)
        </li>
      </ul>
    </div>
    <div>
      <b> Requirements: </b>
      <p>
        Our customer <tt>Super Agile Disruption Co.</tt> wants to build an agile
        issue tracking board with a number of colored squares to represent the
        current disruptiveness-level in the Redux Store market.
      </p>

      <p>
        Luckily they are using React, so they want you to build a component for
        them (you are applying for a job interview, so obviously no payment for
        the free labor... wow... life really sucks). However they thought of
        following color encoding:
      </p>
      <ul>
        <li>
          {" "}
          <b>Green</b> - They are rockin' the Twitter & Hackernews ratings{" "}
        </li>
        <li>
          <b>Yellow</b> - That's a good sign that Elon will fire someone soon,
          if this damn juicing machine doesn't earn him another 10 billion of VC
          money
        </li>
        <li>
          <b>Red</b> - I would not like to be the person attached to this issue
        </li>
        <li>
          <b>Papayawhip</b> - because I wanted a fourth value as a default color
          if no color is provided yet... also I know it from{" "}
          <tt>styled-components</tt> , so it must be a good color?
        </li>
      </ul>
      <p>
        Also the user should be able to pass the size (it's a square, so only
        one length) in pixel. The result would be a colored square with the
        given size. Easy, right?
      </p>
      <p>
        Please be wary that a bunch of monkeys will probably use this
        component... the color is <b>crucial</b>... otherwise we won't reach
        Mars in the next 5 years if this is not <b>perfectly safe</b> to use.
      </p>
      <p>
        <b>Component Usage:</b>
      </p>
      <pre>{"<ColorSquare color=? size=? />"}</pre>
    </div>
    <div>
      <b>Output:</b>
      {testCases.map(({ color, size }, i) => (
        <ColorSquare color={color} size={size} key={i} />
      ))}
    </div>

    <div>
      <Link to="/">Back to the start</Link>
    </div>
  </div>
);

export default WhatToDo;

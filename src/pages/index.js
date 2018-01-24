import React from "react";
import Link from "gatsby-link";
import Form from "../components/Form";

const IndexPage = () => (
  <div>
    <h1>Hello Workshop Attendees!</h1>
    <p> <b>You fell into my trap.</b> </p>
    <p>
      Now it's time to integrate some ReasonReact in here >:-) <br />
      To make things easier, I thought it would be a good idea to put the
      challenge description on this website as well.
    </p>
    <p>
      If you have any trouble, ask your instructor, or do some pair programming!
    </p>
    <Form />
    <Link to="/what_to_do/">Gimme the challenge!</Link>
  </div>
);

export default IndexPage;

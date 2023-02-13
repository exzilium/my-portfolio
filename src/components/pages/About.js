import React from "react";
import avatar from "../../assets/casey.jpeg";

export default function About() {
  return (
    <div>
      <h1>Hi, I'm Casey</h1>
      <p>
        I’m a product manager-turned-full stack developer with a proven
        track-record of driving impact via leading distributed agile teams to
        create user-centric, globally scaled software, getting hands-on with
        licensed apps, integrating 3rd party APIs, and developing web apps.
      </p>
      <img src={avatar} alt="headshot" width="100px" />
    </div>
  );
}

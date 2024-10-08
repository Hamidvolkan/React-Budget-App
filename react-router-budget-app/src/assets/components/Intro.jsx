import React from "react";
//rrd import
import { Form } from "react-router-dom";
//import from hero icon
import { UserPlusIcon } from "@heroicons/react/24/solid";
// import image
import illustration from "../illustration.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <h1>
        Take Control of <span className="accent">Youre money</span>
      </h1>
      <p>
        Personal budgeting is the secret to the finacial freedom. start youre
        journey today
      </p>
      <Form method="post">
        <input type="hidden" name="_action" value="newUser" />

        <input
          type="text"
          name="userName"
          required
          placeholder="what is youre name"
          aria-label="Youre name"
          autoComplete="giver-name"
        />
        <button className="btn btn--dark">
          <span>create Account</span>
          <UserPlusIcon width={20} />
        </button>
      </Form>
      <img src={illustration} alt="person with money" width={600} />
    </div>
  );
};

export default Intro;

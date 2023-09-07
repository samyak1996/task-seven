import React from "react";
import Header from "../header/header";
import "./content.css";

function MainContent() {
  return (
    <div>
      <Header />
      <form action=" ">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        ></input>
        <label for="phonetype">Phone type</label>
        <select id="Type" name="Type">
          <option value="Android">Android</option>
          <option value="Iphone">Iphone</option>
        </select>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default MainContent;

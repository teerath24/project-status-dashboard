import React from "react";
import "./ProgressBar.css";
import StepBox from "./StepBox";

function ProgressBar({ tasks }) {
  // Function to handle task click
  const handleTaskClick = () => {
    const membersString =
      tasks.members.length > 0 ? tasks.members.join(", ") : "No Members"; // concatenates all the elements of the array into a string
    alert(
      `Members: ${membersString}\nTask: ${tasks.name}\nStatus: ${tasks.status}`
    );
  };

  //Ternary operator to set emoji on task status
  const emoji = tasks.status === 7 ? "😀" : tasks.status === 3 ? "😶" : "😞";

  // Array to hold the dots
  const dotsArray = Array.from({ length: 23 }, (_, index) => (
    <div className="dot" key={index}></div>
  )); //create an array with a length of 23. //taking index of element, returns a JSX

  return (
    <div className="progress-container">
      <StepBox name={tasks.name} members={tasks.members} />
      <div className="progress-dots">
        <div
          onClick={handleTaskClick}
          className="emoji"
          style={{ position: "absolute", bottom: `${tasks.status}0%` }}
        >
          {emoji}
        </div>
        {dotsArray}
      </div>
    </div>
  );
}

export default ProgressBar;

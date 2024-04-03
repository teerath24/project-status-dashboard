import React from "react";
import "./Members.css"; // Import CSS file for styling

function Members() {
  const members = [
    { name: "Grump", color: "#6741d9" },
    { name: "Vinod", color: "#c1255b" },
    { name: "Sherlock", color: "#2f9e44" },
  ];

  return (
    <div className="members-container">
      {/* Mapping over the members array and rendering each member */}
      {members.map((member, index) => (
        <div className="member" key={index}>
          {/* Container for each member */}
          <div
            className="circle"
            style={{ backgroundColor: member.color }}
          ></div>
          <span className="member-name">{member.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Members;

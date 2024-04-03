import "./StepBox.css";

function StepBox({ name, members }) {
  // Mapping of member names to colors
  const memberColors = {
    Grump: "#6741d9",
    Vinod: "#c1255b",
    Sherlock: "#2f9e44",
  };

  // Array to hold color circles for each member
  const memberCircles = members.map((member, index) => (
    <div
      className="member-circle"
      key={index}
      style={{ backgroundColor: memberColors[member] }}
    ></div>
  ));

  return (
    <div className="step-box">
      <div className="step-box-circles">{memberCircles}</div>
      {name}
    </div>
  );
}

export default StepBox;

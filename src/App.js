import Header from "./components/Header.js";
import ProgressBar from "./components/ProgressBar.js";
import Members from "./components/Members.js";
import Arrow from "./components/Arrow.js";

const project_update = {
  title: "Project Dashboard",
  section: "Path to greatness",
  tasks: [
    {
      name: "Step 1",
      status: 7,
      members: ["Grump", "Vinod"],
    },
    {
      name: "Step 2",
      status: 7,
      members: [],
    },
    {
      name: "Step 3",
      status: 7,
      members: [],
    },
    {
      name: "Step 4",
      status: 7,
      members: [],
    },
    {
      name: "Step 5",
      status: 7,
      members: [],
    },
    {
      name: "Step 6",
      status: 3,
      members: ["Sherlock"],
    },
    {
      name: "Step 7",
      status: 1,
      members: [],
    },
  ],
};

function App() {
  // Destructuring object
  const { title, section, tasks } = project_update;
  return (
    <>
      <div className="project-name">
        <h1>{title} </h1>
      </div>
      <div className="app-container">
        <Members />
        <div className="right-content">
          <Header title={title} section={section} />
          <Arrow />
          <div className="progress-bar-container">
            {/* Mapping over tasks array and rendering ProgressBar component for each task */}
            {tasks.map((task) => (
              <ProgressBar tasks={task} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { ComponentWithTimer } from "./ComponentWithTimer";
import { useState } from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {showComponent && <ComponentWithTimer />}
      <button onClick={() => setShowComponent(!showComponent)}>
        Show/hide component
      </button>
    </>
  );
}

export default App;

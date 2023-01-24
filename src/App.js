import { useEffect, useState } from "react";
import "./App.css";
import SideStepBar from "./DesktopComponents/SideStepBar/SideStepBar";
import StepContentsContainer from "./DesktopComponents/StepContents/StepContentsContainer/StepContentsContainer";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {});

  return (
    <div className="App">
      {isDesktop && (
        <>
          <SideStepBar />
          <StepContentsContainer />
        </>
      )}
    </div>
  );
}

export default App;

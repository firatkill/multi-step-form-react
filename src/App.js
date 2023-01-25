import { useEffect, useState } from "react";
import "./App.css";
import SideStepBar from "./DesktopComponents/SideStepBar/SideStepBar";
import StepContentsContainer from "./DesktopComponents/StepContents/StepContentsContainer/StepContentsContainer";
import MainContainer from "./MobileComponents/Main/MainContainer/MainContainer";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 550);

  useEffect(() => {});

  return (
    <div className="App">
      {isDesktop && (
        <>
          <SideStepBar />
          <StepContentsContainer />
        </>
      )}
      {!isDesktop && <MainContainer />}
    </div>
  );
}

export default App;

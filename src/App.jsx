import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={5}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <HomePage />
    </>
  );
}

export default App;

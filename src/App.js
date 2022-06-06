import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
//components
import { Navbar } from "./components/Navbar";

import { Background } from "./components/Background";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import Sidebar from "./components/Sidebar";

function App() {
  const { mode, isMobile } = useContext(ThemeContext);

  return (
    <div
      id="App"
      className={`App font-['Poppins'] flex flex-col flex-grow w-full place-self-center ${mode}`}
    >
      <Background />
      <BrowserRouter>
        {isMobile && <Sidebar right width={"200px"} />}

        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

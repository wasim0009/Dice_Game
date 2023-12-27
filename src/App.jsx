import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStart, setisGameStart] = useState(true);
  const togglePlay = () => {
    {
      setisGameStart((prev) => !prev);
    }
  };
  return <>{isGameStart ? <GamePlay /> : <StartGame toggle={togglePlay} />}</>;
}
export default App;

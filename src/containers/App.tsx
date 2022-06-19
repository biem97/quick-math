// Mantine UI
import { useGameStore } from "../core/store";

// Containers
import Game from "./Game";
import Home from "./Home";
import ScoresBoard from "./ScoresBoard";
import AppLayout from "./AppLayout";

const App = () => {
  const { gameStatus } = useGameStore(({ gameStatus }) => ({ gameStatus }));

  // Render app base on Game Status
  const renderApp = () => {
    switch (gameStatus) {
      case "HOME":
        return <Home />;
      case "SCORES_BOARD":
        return <ScoresBoard />;
      default:
        return <Game />;
    }
  };

  return <AppLayout>{renderApp()}</AppLayout>;
};

export default App;

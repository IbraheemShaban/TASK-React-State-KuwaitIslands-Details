import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';
import islands from './data/islands';
import { useState } from 'react';

function App() {
  let initialIsland = {
    name: 'Boubyan',
    img: 'http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg',
  };
  const [island, setIsland] = useState(initialIsland);
  const [islandsState, setIslandsState] = useState(islands);
  const incVisitors = (id) => {
    let newIslands = islandsState;
    newIslands = islandsState.find((island) => island.id == id);
    newIslands.visitors++;
    setIslandsState(newIslands);
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islands={islandsState} />
        <IslandForm island={island} incVisitors={incVisitors} />
      </div>
    </div>
  );
}

export default App;

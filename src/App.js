import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body';
import Popup from './components/popup/Popup';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentUniqueIds, setcurrentUniqueIds] = useState([]);
  const [activePopup, setActivePopup] = useState(false);
  const [gameResult, setGameResult] = useState(false);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    if (bestScore === 15) {
      setActivePopup(true);
      setGameResult(true);
      setBestScore(0);
    }
  }, [currentScore, bestScore])

  function updateUniqueIds(id) {
    if (currentUniqueIds.includes(id)) {
      setcurrentUniqueIds([]);
      setCurrentScore(0);
      setActivePopup(true);
      setGameResult(false);
    } else {
      setcurrentUniqueIds((prev) => [...prev, id]);
      setCurrentScore((prev) => prev + 1);
    }
  }
  return (
    <>
    {activePopup ? <Popup gameResult={gameResult} setActivePopup={setActivePopup}/> : null}
    <Header currentScore={currentScore} bestScore={bestScore}/>
    <Body updateUniqueIds={updateUniqueIds}/>
    </>
  )
}

export default App;

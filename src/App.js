import './App.css';
import { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showPar, setShowPar] = useState(false)

  console.log('App running.')

  const toggleParHandler = () => {
    setShowPar((prevShowPar) => !prevShowPar)
  }

  return (
    <div className="app">
      <h1>Welcome.</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParHandler}>Toggle Paragraph.</Button>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useCallback, Fragment, useMemo } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import DemoList from './components/UI/Button/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List')

  const [showPar, setShowPar] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('App running.')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  const listItems = useMemo(() => [5, 3, 1, 10, 9], [])

  const toggleParHandler = useCallback(() => {
    if (allowToggle) {
      setShowPar((prevShowPar) => !prevShowPar)
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <Fragment>
      <div className="app">
        <h1>Welcome.</h1>
        <DemoOutput show={showPar} />
        <Button onClick={allowToggleHandler}>Allow Toggling</Button>
        <Button onClick={toggleParHandler}>Toggle Paragraph.</Button>
      </div>
      <div className='app'>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      </div>
    </Fragment>
  );
}

export default App;

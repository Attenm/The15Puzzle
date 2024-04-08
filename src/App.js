import './App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './Components/Main/Main';
import ModeSelect from './Components/ModeSelect/ModeSelect';
import Results from './Components/Results/Results';
import { gameReducer } from './reducers';
import { useState } from 'react';

const store = createStore(gameReducer);

function App() {

  const [time, setTime] = useState(0);

  const incrementTime = () => {
    setTime(time => time + 1);
  };

  const resetTime = () => {
    setTime(0);
  }

  return (  
      <div className="App">
        <Provider store={store}>
          <ModeSelect />
          <Main {...{time, incrementTime, resetTime}} />
          <Results {...{time, resetTime}} />
        </Provider>
      </div>
  );
}

export default App;

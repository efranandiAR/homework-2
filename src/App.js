import { Provider } from 'react-redux';
import store from './utilities/redux/store';
import './App.css';
import { RoutePages } from './utilities/router/router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div className="App-title">
            <h1>MockUptify</h1>
          </div>
        </header>
        <div className="Container">
          <RoutePages />
        </div>
      </div>
    </Provider>
  );
}

export default App;

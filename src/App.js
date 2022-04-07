import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Home from './pages/home';
import { RoutePages } from './router';

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
        <footer></footer>
      </div>
    </Provider>
  );
}

export default App;

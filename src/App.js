import { Provider } from 'react-redux';
import store from './utilities/redux/store';
import './App.css';
import { RoutePages } from './utilities/router/router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default App;

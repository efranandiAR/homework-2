import { Provider } from 'react-redux';
import store from './utilities/redux/store';
import './App.css';
import { RoutePages } from './utilities/router/router';
import { 
  Flex,
  Heading 
} from '@chakra-ui/react';


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Flex 
              color='white'
              px={18} py={18}
            >
              <Heading as="h1" size="lg">MockUptify</Heading>
            </Flex>
          </header>
          <Flex
            direction='column'
            align='center'
            justify='center'
          >
            <RoutePages />
          </Flex>
        </div>
      </Provider>
  );
}

export default App;

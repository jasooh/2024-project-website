import { ChakraProvider } from '@chakra-ui/react';
import Background from './components/Background';
import theme from './const/Theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Background/>
    </ChakraProvider>
  );
}

export default App;

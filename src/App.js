import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './const/Theme';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/projects' element={<Home />} />
          <Route path='/contact' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

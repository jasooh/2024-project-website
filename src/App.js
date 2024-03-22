import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import theme from './const/Theme';

import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import ScrollEvent from './components/Scroll';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ScrollEvent />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;

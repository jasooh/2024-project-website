import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import theme from './const/Theme';

import Default from './pages/Default';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// custom components
import HomeSection from './components/HomeSection';
import ScrollEvent from './components/Scroll';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <HomeSection /> 
        <ScrollEvent />
        <Routes>
          <Route path='/' element={<Default />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;

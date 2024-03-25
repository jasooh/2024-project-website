// responsible for holding content section for each page, only loads when the homesection component is loaded in the DOM
import { useState, useEffect } from 'react';
import PortalReactDOM from 'react-dom'

import { Box } from '@chakra-ui/react';

export default function ContentContainer({ children }) {
  const [pageLoaded, setPageLoaded] = useState(false);

  // typing text is re-rendered every page changed and is placed as a child in the already loaded HomeSection component, we can only do this if HomeSection is loaded
  useEffect(() => {
    if (document.readyState === 'complete') { // continue as usual if page is already loaded
      setPageLoaded(true);
    }

    const handleLoad = () => setPageLoaded(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (pageLoaded) {
    return PortalReactDOM.createPortal(
        <>
          <Box height='100vh' width='60vw'>
              {children}
          </Box>  
        </>,
        document.getElementById('content-holder')
    );
  }
}

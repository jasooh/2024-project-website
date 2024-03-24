// typing effect component
import React, { useState, useEffect } from 'react';
import PortalReactDOM from 'react-dom'

import { Text, Box, Stack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// Keyframes for blinking cursor
const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity: 0 }
`;

export default function TypingText({ children }) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);
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

  if (index < children.length) {
    setTimeout(() => {
      setContent(content + children.charAt(index));
      setIndex(index + 1);
    }, 10); // delay between characters
  };

  if (pageLoaded) {
    return PortalReactDOM.createPortal(
      <>
        <Stack direction='row'>
          <Text minH='2rem' width='max'>{content}</Text>
          {/* Cursor effect */}
          <Box marginLeft="-5px" backgroundColor="currentcolor" width="1px" height="1.2em" animation={`${blink} 1s step-start infinite`} />
        </Stack>
      </>,
      document.getElementById('typing-holder')
    );
  }
}

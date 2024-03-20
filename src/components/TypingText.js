import React, { useState, useEffect } from 'react';
import { Text, Box, Stack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity: 0 }
`;

export default function TypingText({ children }) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      setTimeout(() => {
        setContent(content + children.charAt(index));
        setIndex(index + 1);
      }, 20); // 20 ms delay between each character
    }
  }, [index, children]);

  return (
    <>
      <Stack direction='row'>
        <Text width='max'>{content}</Text>
        {/* Cursor effect */}
        <Box marginLeft="-3px" backgroundColor="currentcolor" width="1px" height="1.2em" animation={`${blink} 1s step-start infinite`} />
      </Stack>
    </>
  );
}

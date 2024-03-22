import React, { useState } from 'react';
import { Text, Box, Stack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  from, to { opacity: 1 }
  50% { opacity: 0 }
`;

export default function TypingText({ children }) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  if (index < children.length) {
    setTimeout(() => {
      setContent(content + children.charAt(index));
      setIndex(index + 1);
    }, 10); // 20 ms delay between each character
  }

  return (
    <>
      <Stack direction='row'>
        <Text width='max'>{content}</Text>
        {/* Cursor effect */}
        <Box marginLeft="-5px" backgroundColor="currentcolor" width="1px" height="1.2em" animation={`${blink} 1s step-start infinite`} />
      </Stack>
    </>
  );
}

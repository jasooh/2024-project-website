import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

export default function TypingText({ children }) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      setTimeout(() => {
        setContent(content + children.charAt(index));
        setIndex(index + 1);
      }, 100); // 150 ms delay between each character
    }
  }, [index, children]);

  return <Text>{content}</Text>;
}

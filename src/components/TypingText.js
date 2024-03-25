// typing effect component
import React, { useState, useEffect } from 'react';
import PortalReactDOM from 'react-dom'

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
  // typing effect
  if (index < children.length) {
    setTimeout(() => {
      setContent(content + children.charAt(index));
      setIndex(index + 1);
    }, 10); // delay between characters
  };

  if (pageLoaded) {
    return PortalReactDOM.createPortal(
      <>{content}</>,
      document.getElementById('typing-holder')
    );
  }
}

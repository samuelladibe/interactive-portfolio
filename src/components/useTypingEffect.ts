import { useState, useEffect } from 'react';

/**
 * A custom hook to implement a simple typing animation.
 * @param text The string to be typed out.
 * @param speed The speed of typing in milliseconds per character.
 */
export const useTypingEffect = (text: string, speed: number = 50) => {
  const [typedText, setTypedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return typedText;
};
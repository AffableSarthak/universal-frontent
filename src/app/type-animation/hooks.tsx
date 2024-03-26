import { useState, useEffect } from "react";

export default function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    // Current word
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;
    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return text;
}

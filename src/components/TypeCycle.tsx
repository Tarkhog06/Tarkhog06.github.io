'use client';

import { useEffect, useState } from 'react';

interface TypeCycleProps {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

/**
 * Typewriter effect that types a word, pauses, deletes it, then moves to the
 * next — looping forever. Used for the hero specialty line.
 */
export function TypeCycle({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}: TypeCycleProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    // Reached full word → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // Fully deleted → advance to next word.
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-accent align-middle animate-blink" />
    </span>
  );
}

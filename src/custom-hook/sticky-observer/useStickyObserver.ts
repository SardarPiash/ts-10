import { useEffect, useState } from 'react';

type StickyObserverOptions = {
  offset?: number;   
  threshold?: number; 
};

export function useStickyObserver(
  ref: React.RefObject<HTMLElement | null>,
  options: StickyObserverOptions = {}
): boolean {
  const [isSticky, setIsSticky] = useState(false);
  const { offset = 0, threshold = 0.0 } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold,
        rootMargin: `${offset}px 0px 0px 0px`, 
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, offset, threshold]);

  return isSticky;
}

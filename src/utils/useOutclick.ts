import { useEffect, RefObject } from 'react';

const useOutclick = (ref: RefObject<HTMLDivElement>, isOpen: boolean, toggle: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        event.stopPropagation();
        toggle();
      }
    };

    if (!isOpen) {
      return;
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isOpen]);
};

export default useOutclick;

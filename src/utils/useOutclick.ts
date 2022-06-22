import React, { useEffect } from 'react';

const useOutclick = (ref: React.RefObject<HTMLDivElement>, state: boolean, toggle: () => void) => {
  useEffect(() => {
    if (state) {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          event.stopPropagation();
          toggle();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, state]);
};

export default useOutclick;

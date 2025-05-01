import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const location = useLocation();

  const scrollToHash = useCallback(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return scrollToHash;
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Handle hash scrolling (same page or cross-page)
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Default: Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]); // Re-run on route/hash change

  return null;
}
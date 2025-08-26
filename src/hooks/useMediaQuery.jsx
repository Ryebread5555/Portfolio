import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Add debugging
    console.log('useMediaQuery hook initialized with query:', query);
    
    const media = window.matchMedia(query);
    console.log('Initial media match:', media.matches);
    
    if (media.matches !== matches) {
      console.log('Setting initial matches to:', media.matches);
      setMatches(media.matches);
    }

    const listener = (event) => {
      console.log('Media query change detected:', event.matches);
      setMatches(event.matches);
    };
    
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
import { useEffect, useState } from 'react';

export default function useViewport() {
    // viewport width state
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      // this event listener updates width state when the screen size changes
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize);
  
      // remove the event listener
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // return the width for use in components
    return width;
}
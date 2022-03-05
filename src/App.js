import { useEffect, useState } from 'react';
import DesktopComponent from './components/DesktopComponent';
import MobileComponent from './components/MobileComponent';
import './App.css';

function App() {
  // viewport width state
  const [width, setWidth] = useState(window.innerWidth);
  // the width where we swap components
  const breakpoint = 620;

  useEffect(() => {
    // this event listener updates width state when the screen size changes
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    // remove the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileComponent width={width} /> : <DesktopComponent width={width} />;
}

export default App;

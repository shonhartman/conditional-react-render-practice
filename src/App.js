import DesktopComponent from './components/DesktopComponent';
import MobileComponent from './components/MobileComponent';
import './App.css';
import useViewport from './utility/useViewport';

function App() {
  const width = useViewport();
  // the width where we swap components
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}

export default App;

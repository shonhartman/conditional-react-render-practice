import { createContext, useState, useEffect, useContext } from "react";

const ViewportContext = createContext({});

export default function ViewportProvider({ children }) {
  // viewport width state
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // this event listener updates width state when the screen size changes
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    // remove the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  
  return (
    <ViewportContext.Provider value={width}>
      {children}
    </ViewportContext.Provider>
  ); 
}

export const useViewport = () => {
  const width = useContext(ViewportContext);
  return width;
}
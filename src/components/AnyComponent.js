import { useViewport } from "./ViewPortProvider";
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";

export default function AnyComponent() {
  const width = useViewport();
  // the width where we swap components
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
}
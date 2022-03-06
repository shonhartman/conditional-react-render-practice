import './App.css';
import AnyComponent from './components/AnyComponent';
import ViewportProvider from './components/ViewPortProvider';

function App() {
  return (
    <ViewportProvider>
      <AnyComponent />
    </ViewportProvider>
  );
}

export default App;

/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
import './App.css';
import BarsContainer from './components/BarsContainer';
import Comparision from './components/Comparision';
import Header from './components/Header';
import SortingProvider from './SortingContext/SortingProvider';

function App() {
  return (
    <main className="App">
      <SortingProvider>
        <Header />
        <Comparision />
        <BarsContainer />
      </SortingProvider>
    </main>
  );
}

export default App;

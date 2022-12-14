/* eslint-disable no-undef */
import './App.css';
import BarsContainer from './components/BarsContainer';
import Header from './components/Header';
import SortingProvider from './SortingContext/SortingProvider';

function App() {
  return (
    <main className="App">
      <SortingProvider>
        <Header />
        <BarsContainer />
      </SortingProvider>
    </main>
  );
}

export default App;

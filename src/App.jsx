/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
import { useState } from 'react';
import './App.css';
import Bar from './components/Bar';
import Header from './components/Header';

const heights = [];
for (let i = 0; i < 50; i += 1) {
  const newHeight = `${Math.floor(Math.random() * 60)}vh`;
  if (newHeight && !heights.includes(newHeight)) {
    heights.push(newHeight);
  } else {
    i -= 1;
  }
}
function App() {
  const [bars, setBars] = useState(
    heights.map((bar) => <Bar key={bar} height={bar} isCandidate={false} />),
  );

  return (
    <main className="App">
      <Header bars={bars} setBars={setBars} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: '80vh',
        width: '100vw',
      }}
      >
        {bars}
      </div>
    </main>
  );
}

export default App;

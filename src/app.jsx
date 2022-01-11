import react from 'react';
import './app.css';

function App() {
  const name = 'Banya'
  return (
    <>
    <h1>hello {name}!</h1>
    {['apple', 'banana'].map(item => (
      <h1>{item}</h1>
    ))}
    </>
  );
}

export default App;

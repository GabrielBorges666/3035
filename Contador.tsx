function App() {
  const [name, setName] = useState("Gabriel")
  const [count, setCount] = useState(1)

  function increment (){
    setCount (count + 1)
  }

  function decrement() {
    setCount (count - 1)
  }
  return (
    <div className="App">
      <header className="App-header">

        <p>Contador {count}</p>
        <button onClick={increment}>Adiciona</button>
        <button onClick={decrement}>Reduz</button>
      </header>
    </div>
  );
}

export default App;

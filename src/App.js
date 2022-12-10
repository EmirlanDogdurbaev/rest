import "./App.css";

function App() {
  const test = fetch("http://127.0.0.1:8000/api")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <div className="App">
      <ul>{test.id}</ul>
    </div>
  );
}

export default App;

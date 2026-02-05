import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`http://localhost:5000/${endpoint}`);
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch {
      setResult("Error fetching data");
    }
  };
  

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>MyApp</h2>
        <span>Home</span>
      </nav>

      {/* Content */}
      <div className="content">
        <p>Learning NodeJS fs module</p>
        <p>Click buttons to see results</p>

        <div className="buttons">
          <button onClick={() => fetchData("total-memory")}>
            Total Memory
          </button>

          <button onClick={() => fetchData("free-memory")}>
            Free Memory
          </button>

          <button onClick={() => fetchData("create-file")}>
            Create File
          </button>

          <button onClick={() => fetchData("copy-file")}>
            Copy File
          </button>
        </div>

        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default App;

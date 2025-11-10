import React from "react";
import "./App.css";
// import "./index.css"
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <div id="adi">
        <Routes>
          <Route path="/" element={
              <div id="adi">
                <Book name="Math" price="250" img="https://www.shutterstock.com/image-vector/math-book-blue-covers-word-260nw-229009651.jpg"/>
                <Book name="Physics" price="300" img="https://cdn2.penguin.com.au/covers/original/9780241412725.jpg"/>
                <Book name="Chemistry" price="400" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eQLxHzersIRrQEMw-qK1QqRNEQU-K6POMA&s"/>
                <Book name="Grammer" price="350" img="https://m.media-amazon.com/images/I/61Ffj+e8gIL._AC_UF1000,1000_QL80_.jpg"/>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
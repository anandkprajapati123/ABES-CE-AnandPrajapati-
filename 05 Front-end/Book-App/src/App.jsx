import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="book-container">
              <Book
                img="https://cdn2.penguin.com.au/covers/original/9780241412725.jpg" name="Physics" price={300} cartCount={cartCount} setCartCount={setCartCount}
              />
              <Book
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eQLxHzersIRrQEMw-qK1QqRNEQU-K6POMA&s" name="Chemistry" price={400} cartCount={cartCount} setCartCount={setCartCount}
              />
              <Book
                img="https://www.shutterstock.com/image-vector/math-book-blue-covers-word-260nw-229009651.jpg" name="Math" price={250} cartCount={cartCount} setCartCount={setCartCount}
              />
              <Book
                img="https://m.media-amazon.com/images/I/61Ffj+e8gIL._AC_UF1000,1000_QL80_.jpg" name="Grammer" price={300} cartCount={cartCount} setCartCount={setCartCount}
              />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

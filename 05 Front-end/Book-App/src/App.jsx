import React from "react";
import "./App.css";
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
              <div>
                <Book name="Math" price="200" img="https://imgv2-1-f.scribdassets.com/img/word_document/238627506/original/d2649325db/1617700948?v=1"/>
                <Book name="Physics" price="400" img="https://cdn2.penguin.com.au/covers/original/9780241412725.jpg"/>
                <Book name="Chemistry" price="411" img="https://ak-asset.jarir.com/akeneo-prod/asset/m1images/3/9/397024.jpg"/>
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
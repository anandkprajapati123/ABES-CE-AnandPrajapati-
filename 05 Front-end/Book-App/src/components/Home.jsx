import Book from "./Book";

function Home({ cartCount, setCartCount }) {
  const books = [
    { img: "https://5.imimg.com/data5/HX/TD/MY-14344381/nootan-physics-xii-book-500x500.png", name: "Physics", price: 300 },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1eQLxHzersIRrQEMw-qK1QqRNEQU-K6POMA&s", name: "Chemistry", price: 400 },
    { img: "https://www.shutterstock.com/image-vector/math-book-blue-covers-word-260nw-229009651.jpg", name: "Math", price: 250 },
    { img: "https://m.media-amazon.com/images/I/61Ffj+e8gIL._AC_UF1000,1000_QL80_.jpg", name: "Grammar", price: 350 },
  ];

  return (
    <div className="book-container">
      {books.map((b, index) => (
        <Book key={index} {...b} cartCount={cartCount} setCartCount={setCartCount} />
      ))}
    </div>
  );
}

export default Home;

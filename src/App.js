import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();

      setAllBooks(response);
    };

    getBooks();
  }, []);

  const changeBookShelf = async (book, shelf) => {
    console.log(shelf);
    await BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((updatedBooks) => setAllBooks(updatedBooks));
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home myBooks={allBooks} changeBookShelf={changeBookShelf} />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <Search allBooks={allBooks} changeBookShelf={changeBookShelf} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

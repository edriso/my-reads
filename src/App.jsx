import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();

      setMyBooks(response);
    };

    getBooks();
  }, []);

  const changeBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((updatedBooks) => setMyBooks(updatedBooks));
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home myBooks={myBooks} changeBookShelf={changeBookShelf} />}
        />
        <Route
          path="/search"
          element={
            <Search myBooks={myBooks} changeBookShelf={changeBookShelf} />
          }
        />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

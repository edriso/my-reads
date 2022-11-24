import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home myBooks={myBooks} changeBookShelf={changeBookShelf} />
            }
          ></Route>
          <Route
            path="/search"
            element={
              <Search myBooks={myBooks} changeBookShelf={changeBookShelf} />
            }
          ></Route>
          <Route path="/book/:id" element={<BookDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

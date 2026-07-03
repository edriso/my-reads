import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";

const Home = ({ myBooks, changeBookShelf }) => {
  const [currentList, setCurrentList] = useState([]);
  const [wantReadList, setWantReadList] = useState([]);
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    setCurrentList(myBooks.filter((book) => book.shelf === "currentlyReading"));

    setWantReadList(myBooks.filter((book) => book.shelf === "wantToRead"));

    setReadList(myBooks.filter((book) => book.shelf === "read"));
  }, [myBooks]);

  return (
    <main className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <Bookshelf
          title="Currently Reading"
          books={currentList}
          changeBookShelf={changeBookShelf}
        />

        <Bookshelf
          title="Want to Read"
          books={wantReadList}
          changeBookShelf={changeBookShelf}
        />

        <Bookshelf
          title="Read"
          books={readList}
          changeBookShelf={changeBookShelf}
        />
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </main>
  );
};

export default Home;

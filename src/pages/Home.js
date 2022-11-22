import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";

const Home = ({ myBooks, changeBookCategory }) => {
  const [currentList, setCurrentList] = useState([]);
  const [wantReadList, setWantReadList] = useState([]);
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    setCurrentList(
      myBooks.filter((book) => book.status === "currentlyReading")
    );

    setWantReadList(myBooks.filter((book) => book.status === "wantToRead"));

    setReadList(myBooks.filter((book) => book.status === "read"));
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
          changeBookCategory={changeBookCategory}
        />

        <Bookshelf
          title="Want to Read"
          books={wantReadList}
          changeBookCategory={changeBookCategory}
        />

        <Bookshelf
          title="Read"
          books={readList}
          changeBookCategory={changeBookCategory}
        />
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </main>
  );
};

export default Home;

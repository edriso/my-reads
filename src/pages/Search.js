import { useState } from "react";
import { Link } from "react-router-dom";
import SingleBook from "../components/SingleBook";
import * as BooksAPI from "../BooksAPI";

const Search = ({ allBooks, changeBookShelf }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSearch = async (query) => {
    setSearchInput(query);

    if (query.trim()) {
      await BooksAPI.search(query).then((results) => {
        if (results.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(results);
        }
      });
    } else {
      setSearchedBooks([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) => {
            return (
              <SingleBook
                key={book.id}
                book={book}
                changeBookShelf={changeBookShelf}
              />
            );
          })}

          {!searchedBooks.length && searchInput.trim() && (
            <div>
              <p>Couldn't find a result for '{searchInput}' !</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;

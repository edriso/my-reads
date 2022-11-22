import { useState } from "react";
import { Link } from "react-router-dom";
import SingleBook from "../components/SingleBook";

const Search = ({ allBooks, changeBookCategory }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;

    setSearchInput(inputValue);

    if (inputValue.trim()) {
      const filteredBooks = allBooks.filter((book) => {
        if (
          book.title.includes(inputValue) ||
          book.author.includes(inputValue)
        ) {
          return book;
        }
        return null;
      });

      setSearchedBooks(filteredBooks);
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
            onChange={(e) => handleSearch(e)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book, i) => {
            return (
              <SingleBook
                key={i}
                {...book}
                changeBookCategory={changeBookCategory}
              />
            );
          })}

          {!searchedBooks.length && searchInput && (
            <div>
              <p>Couldn't find this book!</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;

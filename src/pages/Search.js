import { Link } from "react-router-dom";
// import SingleBook from "../components/SingleBook";

const Search = () => {
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>

        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title, author, or ISBN' />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {/* {books.map((book, i) => {
            return (
              <SingleBook
                key={i}
                {...book}
                changeBookCategory={changeBookCategory}
              />
            );
          })} */}
        </ol>
      </div>
    </div>
  );
};

export default Search;

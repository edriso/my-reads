import SingleBook from "./SingleBook";

const Bookshelf = (props) => {
  const { title, books, changeBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <SingleBook
                key={book.id}
                book={book}
                changeBookShelf={changeBookShelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

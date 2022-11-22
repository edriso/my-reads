import SingleBook from "./SingleBook";

const Bookshelf = (props) => {
  const { title, books, changeBookCategory } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, i) => {
            return (
              <SingleBook
                key={i}
                {...book}
                changeBookCategory={changeBookCategory}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

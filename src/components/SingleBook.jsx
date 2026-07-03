import { Link } from "react-router-dom";

const SingleBook = ({ book, changeBookShelf }) => {
  const options = [
    {
      name: "Currently Reading",
      value: "currentlyReading",
    },
    {
      name: "Want to Read",
      value: "wantToRead",
    },
    {
      name: "Read",
      value: "read",
    },
    {
      name: "None",
      value: "none",
    },
  ];

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <Link to={`/book/${book.id}`}>
            {book.imageLinks && (
              <div
                className="book-cover"
                style={{
                  backgroundImage: `url("${book.imageLinks.thumbnail}")`,
                }}
              ></div>
            )}
          </Link>
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : "none"}
              onChange={(e) => changeBookShelf(book, e.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              {options.map((item) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && (
          <div className="book-authors">By: {book.authors.join(", ")}</div>
        )}
      </div>
    </li>
  );
};

export default SingleBook;

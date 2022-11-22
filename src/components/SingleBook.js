const SingleBook = ({
  title,
  authors,
  cover,
  status = "none",
  changeBookCategory,
}) => {
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
          <div
            className="book-cover"
            style={{ backgroundImage: `url("${cover}")` }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={status}
              onChange={(e) => changeBookCategory(e, title, authors)}
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
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default SingleBook;

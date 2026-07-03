import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    const selectedBook = async () => {
      try {
        const response = await BooksAPI.get(id);
        setBook(response);
      } catch (error) {
        console.log(error);
        navigate("/NotFound");
      }

      // TEMPORARY
      //   console.log(response);
    };
    selectedBook();
  }, [id, navigate]);

  return (
    <div className="book-details">
      <button className="close-search" onClick={() => navigate(-1)}>
        go back
      </button>

      <div className="book-top">
        {book.imageLinks && (
          <div
            className="book-cover"
            style={{
              backgroundImage: `url("${book.imageLinks.thumbnail}")`,
            }}
          ></div>
        )}
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-subtitle">{book.subtitle}</div>
      {book.authors && (
        <div className="book-authors">
          Published on: {book.publishedDate}, By: {book.authors.join(", ")}
        </div>
      )}
      <div className="book-rating">
        {book.averageRating} Rating avg
        <small> of total {book.ratingsCount} ratings</small>
      </div>
    </div>
  );
};

export default BookDetails;

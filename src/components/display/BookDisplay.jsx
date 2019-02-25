import React from 'react';
import './BookDisplay.css';

const BookDisplay = props => {
  return (
    <div>
      {props.items.map(item => {
        let {
          id,
          title,
          authors,
          publisher,
          imageLinks,
          infoLink
        } = item.volumeInfo;
        return (
          <div className="books">
            <img src={imageLinks.thumbnail} alt={title} className="book-img" />
            <h2 key={title}>{title}</h2>
            <p className="author">{authors}</p>
            <p className="publisher">{publisher}</p>
            <a href={infoLink}>Visit</a>
          </div>
        );
      })}
    </div>
  );
};

export default BookDisplay;

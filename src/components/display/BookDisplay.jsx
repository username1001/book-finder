import React from 'react';
import Button from '../Button';
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
            <img
              src={imageLinks.thumbnail}
              alt={title}
              className="book-img"
              key={imageLinks}
            />
            <h2 key={title}>{title}</h2>
            <p className="author" key={authors}>
              {authors}
            </p>
            <p className="publisher" key={publisher}>
              {publisher}
            </p>
            <Button>
              <a href={infoLink} key={infoLink}>
                Visit
              </a>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default BookDisplay;

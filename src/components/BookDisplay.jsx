import React, { Component } from 'react';
import book from '../assets/book.png';

export default class BookDisplay extends Component {
  render() {
    return <div />;
  }
}

// const BookDisplay = ({ items, index }) => {
//   let { title, imageLinks, infoLink } = items.volumeInfo;
//   return (
//     <div>
//       items.map((item, index) =>{' '}
//       {
//         <div>
//           <a key={index} className="book" href={infoLink} />
//           <img
//             src={undefined !== imageLinks ? imageLinks.thumbnail : { book }}
//           />
//           <header className="book-title">{title}</header>
//         </div>
//       }
//       );
//     </div>
//   );
// };

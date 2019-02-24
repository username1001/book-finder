import React, { Component } from 'react';
import book from '../assets/book.png';

// export default class BookDisplay extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.items.map(item => {
//           let {
//             title,
//             author,
//             publisher,
//             imageLinks,
//             infoLink
//           } = item.volumeInfo;
//           return (
//             <div>
//               <h1>{title}</h1>
//               <h3>{author}</h3>
//               <p>{publisher}</p>
//               <a href={infoLink}>Visit</a>
//               <img src={imageLinks} alt={title} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

const BookDisplay = props => {
  return (
    <div>
      {props.items.map(item => {
        let {
          title,
          authors,
          publisher,
          imageLinks,
          infoLink
        } = item.volumeInfo;
        return (
          <div>
            <h1>{title}</h1>
            <h3>{authors}</h3>
            <p>{publisher}</p>
            <a href={infoLink}>Visit</a>
            <img src={imageLinks.thumbnail} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default BookDisplay;

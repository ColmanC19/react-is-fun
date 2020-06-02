import React, { Component } from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "The Sun also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Hunger", "author": "Roxanne Gay", "pages": 320},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
       <p>{author}</p>
       <p>{pages}</p>
       <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>The Library is hiring!</p>
  </div>
  const NotHiring = () => 
  <div>
    <p>The Library is no longer hiring</p>
  </div>


class Library extends React.Component {
  state = {
     open: true,
     freeBookmark: true,
     hiring: true,
    }

  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !this.state.open
    }))
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
          {books.map(
            (book, i) => <Book
              title={book.title} 
              author={book.author} 
              pages={book.pages}
             />
  
      )}
    </div>

    )


  }
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
  )
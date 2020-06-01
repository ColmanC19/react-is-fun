import React, { Component } from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "The Sun also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
  {"title": "Hunger", "author": "Roxanne Gay", "pages": 320},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
       <p>{author}</p>
       <p>{pages}</p>
    </section>
  )
}

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true 
    }
  }
  render() {
    const { books } = this.props
    return (
      <div>
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
      {books.map(
        (book, i) => <Book
           title={book.title} 
           author={book.author} 
           pages={book.pages} />
  
      )}
    </div>

    )


  }
}

render(
  <Library books={bookList}/>,
  document.getElementById('root')
  )
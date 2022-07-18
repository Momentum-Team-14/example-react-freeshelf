import React from 'react'
import './App.css'
import books from './books'
import Book from './components/Book'

function App() {
  return (
    <div className="App">
      <h1>Freeshelf</h1>
      {books.map((bookObj) => (
        <Book book={bookObj} key={bookObj.url} />
      ))}
    </div>
  )
}

export default App

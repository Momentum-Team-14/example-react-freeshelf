import React, { useState } from 'react'

export default function Book(props) {
  const { book } = props

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="Book">
      <div className="book-detail">
        <h2>{book.title}</h2>
        <div>Author: {book.author}</div>
        <p>{book.shortDescription}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide more info' : 'Show more info'}
        </button>
      </div>
      <div className="book-cover-img">
        <img src={book.coverImageUrl} alt={book.title} />
      </div>

      {expanded ? (
        <div style={{ marginTop: '1rem' }}>
          <div>
            URL: <a href={book.url}>{book.url}</a>
          </div>
          {book.publicationDate && (
            <div>Publication date: {book.publicationDate}</div>
          )}
          {book.publisher && <div>Publisher: {book.publisher}</div>}
          <p>More about this book: {book.detailedDescription}</p>
        </div>
      ) : null}
    </div>
  )
}

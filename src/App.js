import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handlecreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedId = books.filter((book) => {
      //when using filter either we return a truthy value or
      //we return a falthy value. We return a falthy value if we want to remove something
      //that we dont want around us.
      return book.id !== id;
    });
    setBooks(updatedId);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handlecreateBook} />
    </div>
  );
}

export default App;

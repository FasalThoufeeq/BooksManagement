import Books from "../Models/bookModel.js";

const bookHelper = () => {
  Books.schema.index({ bookTitle: 1, author: 1 });
  Books.schema.index({ _id: 1 });
  const addBook = async (book) => {
    const newBook = new Books(book);
    newBook.save();
    return;
  };
  const viewAllBooks = async (skip, limit) => {
    const allBooks = await Books.find().skip(skip).limit(limit);
    return allBooks;
  };
  const singleView = async (bookId) => {
    const book = await Books.findById(bookId);
    return book;
  };
  const editBook = async (editedBook, bookId) => {
    const updatedBook = await Books.findByIdAndUpdate(
      { _id: bookId },
      { $set: editedBook },
      { new: true }
    );
    return updatedBook;
  };
  const removeBook = async (bookId) => {
    const removedBook = await Books.findByIdAndRemove(bookId);
    return removedBook;
  };
  return {
    addBook,
    viewAllBooks,
    singleView,
    editBook,
    removeBook,
  };
};

export default bookHelper;

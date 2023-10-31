import asyncHandler from "express-async-handler";
import bookHelper from "../Helpers/bookHelper.js";

const bookController = () => {
  const addBook = asyncHandler(async (req, res) => {
    const book = req.body;
    await bookHelper().addBook(book);
    res.json({
      status: "success",
      message: "Book Added successfully",
    });
  });

  const viewAllBooks = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    const books = await bookHelper().viewAllBooks(skip, limit);
    res.json({
      status: "success",
      message: "All Books fetched successfully",
      books,
    });
  });

  const singleView = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const book = await bookHelper().singleView(bookId);
    if (book) {
      res.json({
        status: "success",
        message: "Book fetched successfully",
        book,
      });
    } else {
      res.json({
        status: "failed",
        message: "Book not matching",
      });
    }
  });

  const editBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const editedBook = req.body;
    const changedBook = await bookHelper().editBook(editedBook, bookId);
    if (changedBook) {
      res.json({
        status: "success",
        message: "Book updated successfully",
        changedBook,
      });
    } else {
      res.json({
        status: "failed",
        message: "Book not matching",
      });
    }
  });

  const removeBook = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const removedBook = await bookHelper().removeBook(bookId);
    if (removedBook) {
        console.log(removedBook);
      res.json({
        status: "success",
        message: "Book removed successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "Book not matching",
      });
    }
  });

  return {
    addBook,
    viewAllBooks,
    singleView,
    editBook,
    removeBook,
  };
};

export default bookController;

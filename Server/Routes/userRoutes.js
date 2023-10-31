import express from "express";
import bookController from "../Controllers/bookController.js";

const userRoutes = () => {
  const router = express.Router();
  const Controller = bookController();

  router.post("/add_book", Controller.addBook);

  router.get("/view_all_books", Controller.viewAllBooks);

  router.get('/single_view/:bookId',Controller.singleView)

  router.put("/edit_book/:bookId",Controller.editBook)

  router.delete("/remove_book/:bookId",Controller.removeBook)

  return router;
};

export default userRoutes;

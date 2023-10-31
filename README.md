# BooksManagement

## API Endpoints and Usage
-------------------------

### 1. Add a Book

- **Endpoint:** `/add_book`
- **HTTP Method:** POST
- **Description:** Add a new book to the database.
- **Request Body:**
  ```json
  {
    "bookTitle": "Book Title",
    "author": "Author Name",
    "summary": "some summary"
  }
  ```
**Response :**
  ```json
  {
    "status": "success",
    "message": "Book Added successfully"
  }
  ```



### 2. View All Books
- **Endpoint:** `/view_all_books`
- **HTTP Method:** GET
- **Description:** Retrieve a list of all books in the database.
- **Query Parameters:** page (optional): Page number for pagination (default: 1).
**Response :**
  ```json
  {
    "status": "success",
    "message": "All Books fetched successfully",
    "books": [
      // List of book objects
    ]
  }
  ```
 



### 3. View a Single Book
- **Endpoint:** `/single_view/:bookId`
- **HTTP Method:** GET
- **Description:** Retrieve details of a single book by its ID.
- **URL Parameter:** bookId: ID of the book to view.
**Response (Success):**
  ```json
  {
    "status": "success",
    "message": "Book fetched successfully",
    "book": {
      // Book details
    }
  }
  ```
  **Response (Failure):**
  ```json
  {
    "status": "failed",
    "message": "Book not matching"
  }
  ```


### 4. Edit a Book
- **Endpoint:** `/edit_book/:bookId`
- **HTTP Method:** PUT
- **Description:** Update the details of a book by its ID.
- **URL Parameter:** bookId: ID of the book to edit.
**Request Body:**
  ```json
  {
    "bookTitle": "New Title",
    "author": "New Author",
  "summary": "new summary",
    // Updated book properties
  }
  ```
**Response (Success) :**
  ```json
  {
    "status": "success",
    "message": "Book updated successfully",
    "changedBook": {
      // Updated book details
    }
  }
  ```

**Response (Failure):**
  ```json
  {
    "status": "failed",
    "message": "Book not matching"
  }
  ```



### 5. Remove a Book
- **Endpoint:** `/remove_book/:bookId`
- **HTTP Method:** DELETE
- **Description:** Remove a book from the database by its ID.
- **URL Parameter:** bookId: ID of the book to remove.
**Response (Success) :**
  ```json
  {
    "status": "success",
    "message": "Book removed successfully"
  }
  ```
**Response (Failure):**
  ```json
  {
    "status": "failed",
    "message": "Book not matching"
  }
  ```




### Setting Up and Starting the Server

Follow these steps to set up and start your Node.js server:

#### 1. Clone the Repository
First, clone the repository to your local machine using Git:
https://github.com/FasalThoufeeq/BooksManagement.git

**2. Navigate to the Project Directory**
Navigate to the project directory:
cd Server

**3. Install Dependencies**
Use the following command to install the project dependencies listed in your package.json:
npm install
This will install packages like Express, Mongoose, and others.

**4. Configure Environment Variables**
Create a .env file in the project directory to store environment-specific variables. For example, if you need to specify a database connection URL, your .env file might look like this:
DATABASE_URL=mongodb://localhost/your_database_name
PORT=3000
Make sure to customize the variables as needed for your project.

**5. Starting the Server**
You can start the server using the following command:
npm start
This command will use Nodemon to monitor your server files for changes and automatically restart the server when changes are detected. Your server will start, and it should be available at the specified port (e.g., http://localhost:3000).

**6. Testing the Endpoints**
You can now test the API endpoints by sending requests to the server. Refer to the API documentation in this README for details on available endpoints and their usage.

That's it! Your Node.js server is now set up and running. You can customize and expand your server as needed for your project. Don't forget to document any additional configuration or usage instructions in your README file as your project evolves.



### DESCISSIONS OR ASSUMPTIONS I MADE DURING THE DEVELOPMENT PROCESS


**1.Database Choice:**
 I decided to implement MongoDB using Mongoose as the ODM (Object Data Modeling) library for data storage, which allows you to work with MongoDB in a more structured and efficient way.
 If you need more control over your data model and want to define a schema for your MongoDB collections, Mongoose can be a good choice. Mongoose can help with validation and enforcing data integrity, which can be important in certain applications, while MongoDB doesn't enforce schema by default.


**2.Pagination**
 I implemented pagination for the /view_all_books route. This allows you to retrieve a limited number of books per request and handle large datasets more efficiently. Users can specify a page number to navigate through the book list.

**3.Indexing:**
 Added indexing for the database, specifically for the bookTitle, author, and _id fields. This decision is based on the assumption that these fields are frequently used in queries. Indexing can significantly improve query performance by facilitating quick data retrieval through IXCAN.

**4.Error Handling:**
 I have implemented error handling, with the help of the express-async-handler library. Proper error handling is crucial to ensure the reliability
 
**4.Environment Variables:**
 Environment-specific variables should be stored in an .env file, separate from your codebase. This is a good practice for keeping sensitive information secure and making your application more configurable.



## THANK YOU FOR READING THE INFORMATONS ABOUT THE APLLICATION
**************************************************************


# MyReads Project

MyReads is a book tracking application that has a dashboard that has containing book shelves that has a list of items labelled 'Currently Reading','want to read' and 'read'. When you click on the '+' sign button you will be brought to the /search page where you can then search for new books to add to your dashboard

To Load the prokect

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Overview Of the Codebase

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # Styles for the app
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── Search.js # Component For searching
    ├── BooksAPI.js # Myreads Dashboard
    ├── BookShelf.js # BookShelf component for each shelf listed on the app
    ├── Book.js # Book component containing book name, image, authors and select options
    ├── Authors.js # list of authors on the book
    ├── SelectOptions.js # Contains the options you can do in the app
    ├── icons #  images for the  app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js
```

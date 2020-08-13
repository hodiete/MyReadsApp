# MyReads Project

MyReads is a book tracking application consisting of a dashboard and a search page. Within the dashboard are books under each category labelled 'Currently reading', 'Want to Read' and 'Read'. You can move a book from one section to the other by clicking the dropdown next to a book and choosing where to move the book to and it will update accordingly
note: if you move the book to none, it won't be on any of the shelves.

You can select new books by clicking the icon located on the far right down section and it will bring you to the /search page. There you can search for new books to add to your dashboard.

To Load the project

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
    └── components
     ├── Search.js # Component For searching
     ├── BooksAPI.js # Myreads Dashboard
     ├── BookShelf.js # BookShelf component for each shelf listed on the app
     ├── Book.js # Book component containing book name, image, authors and select options
     ├── Authors.js # list of authors on the book
     ├── SelectOptions.js # Contains the options you can do in the app
    └──── book-api
     ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── App.css # Styles for the app
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing.
    ├── icons #  images for the  app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js
```

### About

Project was done as part of the requirements to passing the react nanodegree program. Code was forked from the reactnd-project-myreads-starter code and worked on. This project showcases my knowlegde and understanding of react.

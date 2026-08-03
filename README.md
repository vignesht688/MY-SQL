# SQL Practice Playground

An interactive, premium SQL Practice Web Application built with HTML, CSS, and JavaScript. Practice SQL queries directly in your browser with immediate feedback, visual schema trees, and interactive challenges.

## Features

- **Interactive SQL Editor**: Powered by Monaco Editor (the editor engine behind VS Code) with SQL autocomplete and syntax highlighting.
- **In-Browser Database**: Runs fully in-browser using AlaSQL. No local database, server, or Docker setup required.
- **Visual Schema Browser**: Expand and view tables, column names, types, and primary/foreign key relationships.
- **Sample Databases**: Includes pre-loaded datasets (Company & Employees, E-Commerce Store).
- **Interactive Challenges**: Solve built-in queries to test your knowledge, with auto-verification against standard outputs.
- **Query History & Progress Tracking**: Keeps track of your run query history and solved challenges using local storage.

## How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in a web browser, or use a local development server like VS Code's Live Server or Python's HTTP server:
   ```bash
   # Run with Python
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

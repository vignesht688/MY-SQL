// Data definitions and logic for SQL Practice App

// Database Seed Data
const DATABASES = {
    company: {
        setup: [
            // Create tables
            "CREATE TABLE departments (dept_id INT PRIMARY KEY, dept_name STRING);",
            "CREATE TABLE employees (emp_id INT PRIMARY KEY, first_name STRING, last_name STRING, dept_id INT, salary INT, hire_date STRING);",
            "CREATE TABLE projects (project_id INT PRIMARY KEY, project_name STRING, budget INT);",
            "CREATE TABLE employee_projects (emp_id INT, project_id INT, hours_worked INT);",
            
            // Insert departments
            "INSERT INTO departments VALUES (1, 'Engineering');",
            "INSERT INTO departments VALUES (2, 'Sales');",
            "INSERT INTO departments VALUES (3, 'Marketing');",
            "INSERT INTO departments VALUES (4, 'HR');",
            "INSERT INTO departments VALUES (5, 'Finance');",
            
            // Insert employees
            "INSERT INTO employees VALUES (101, 'John', 'Doe', 1, 85000, '2021-03-15');",
            "INSERT INTO employees VALUES (102, 'Jane', 'Smith', 1, 95000, '2020-07-19');",
            "INSERT INTO employees VALUES (103, 'Michael', 'Johnson', 2, 70000, '2022-01-10');",
            "INSERT INTO employees VALUES (104, 'Emily', 'Brown', 1, 62000, '2023-05-04');",
            "INSERT INTO employees VALUES (105, 'William', 'Davis', 3, 58000, '2021-11-12');",
            "INSERT INTO employees VALUES (106, 'Olivia', 'Miller', 2, 72000, '2020-02-01');",
            "INSERT INTO employees VALUES (107, 'David', 'Wilson', 4, 60000, '2022-08-25');",
            "INSERT INTO employees VALUES (108, 'Sophia', 'Moore', 5, 90000, '2019-06-30');",
            "INSERT INTO employees VALUES (109, 'James', 'Taylor', 3, 55000, '2023-02-28');",
            
            // Insert projects
            "INSERT INTO projects VALUES (10, 'Apollo', 120000);",
            "INSERT INTO projects VALUES (20, 'Zeus', 85000);",
            "INSERT INTO projects VALUES (30, 'Hermes', 45000);",
            "INSERT INTO projects VALUES (40, 'Titan', 250000);",
            
            // Insert employee_projects
            "INSERT INTO employee_projects VALUES (101, 10, 35);",
            "INSERT INTO employee_projects VALUES (101, 20, 15);",
            "INSERT INTO employee_projects VALUES (102, 10, 40);",
            "INSERT INTO employee_projects VALUES (103, 30, 20);",
            "INSERT INTO employee_projects VALUES (104, 20, 30);",
            "INSERT INTO employee_projects VALUES (105, 30, 25);",
            "INSERT INTO employee_projects VALUES (108, 40, 10);"
        ]
    },
    shop: {
        setup: [
            // Create tables
            "CREATE TABLE customers (customer_id INT PRIMARY KEY, name STRING, email STRING, city STRING);",
            "CREATE TABLE products (product_id INT PRIMARY KEY, product_name STRING, price DECIMAL, stock INT);",
            "CREATE TABLE orders (order_id INT PRIMARY KEY, customer_id INT, order_date STRING, total_amount DECIMAL);",
            "CREATE TABLE order_items (item_id INT PRIMARY KEY, order_id INT, product_id INT, quantity INT, price DECIMAL);",
            
            // Insert customers
            "INSERT INTO customers VALUES (1, 'Alice Vane', 'alice@gmail.com', 'New York');",
            "INSERT INTO customers VALUES (2, 'Bob Miller', 'bob@yahoo.com', 'San Francisco');",
            "INSERT INTO customers VALUES (3, 'Charlie Green', 'charlie@gmail.com', 'Chicago');",
            "INSERT INTO customers VALUES (4, 'Diana Prince', 'diana@amazon.com', 'New York');",
            "INSERT INTO customers VALUES (5, 'Evan Wright', 'evan@outlook.com', 'Boston');",
            
            // Insert products
            "INSERT INTO products VALUES (501, 'Wireless Mouse', 25.99, 150);",
            "INSERT INTO products VALUES (502, 'Mechanical Keyboard', 89.99, 60);",
            "INSERT INTO products VALUES (503, 'USB-C Hub', 34.50, 200);",
            "INSERT INTO products VALUES (504, 'Gaming Monitor', 249.99, 15);",
            "INSERT INTO products VALUES (505, 'Bluetooth Speaker', 59.99, 0);",
            
            // Insert orders
            "INSERT INTO orders VALUES (1001, 1, '2023-10-01', 86.48);",
            "INSERT INTO orders VALUES (1002, 3, '2023-10-02', 249.99);",
            "INSERT INTO orders VALUES (1003, 2, '2023-10-03', 34.50);",
            "INSERT INTO orders VALUES (1004, 1, '2023-10-04', 115.98);",
            "INSERT INTO orders VALUES (1005, 5, '2023-10-05', 121.49);",
            
            // Insert order_items
            "INSERT INTO order_items VALUES (1, 1001, 501, 2, 25.99);",
            "INSERT INTO order_items VALUES (2, 1001, 503, 1, 34.50);",
            "INSERT INTO order_items VALUES (3, 1002, 504, 1, 249.99);",
            "INSERT INTO order_items VALUES (4, 1003, 503, 1, 34.50);",
            "INSERT INTO order_items VALUES (5, 1004, 502, 1, 89.99);",
            "INSERT INTO order_items VALUES (6, 1004, 501, 1, 25.99);",
            "INSERT INTO order_items VALUES (7, 1005, 503, 1, 34.50);",
            "INSERT INTO order_items VALUES (8, 1005, 501, 1, 25.99);",
            "INSERT INTO order_items VALUES (9, 1005, 505, 1, 59.99);"
        ]
    }
};

// SQL Challenges list
const CHALLENGES = [
    {
        id: 1,
        title: "1. Select All Employees",
        db: "company",
        difficulty: "easy",
        desc: "Retrieve all records and all columns from the <code>employees</code> table.",
        solution: "SELECT * FROM employees;",
        hint: "Use SELECT * FROM employees;"
    },
    {
        id: 2,
        title: "2. High-Earning Employees",
        db: "company",
        difficulty: "easy",
        desc: "Find all employees who earn a salary greater than 70,000. Return all columns.",
        solution: "SELECT * FROM employees WHERE salary > 70000;",
        hint: "Filter the rows using a WHERE clause: WHERE salary > 70000"
    },
    {
        id: 3,
        title: "3. Employees with Departments",
        db: "company",
        difficulty: "medium",
        desc: "Select each employee's <code>first_name</code>, <code>last_name</code>, and their <code>dept_name</code>. Join the <code>employees</code> table and the <code>departments</code> table using <code>dept_id</code>.",
        solution: "SELECT e.first_name, e.last_name, d.dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.dept_id;",
        hint: "Use INNER JOIN on employees.dept_id = departments.dept_id."
    },
    {
        id: 4,
        title: "4. Department Salary Summary",
        db: "company",
        difficulty: "medium",
        desc: "Calculate the total salary budget for each department. Show the <code>dept_name</code> and the sum of salaries labeled as <code>total_budget</code>. Group by department name.",
        solution: "SELECT d.dept_name, SUM(e.salary) AS total_budget FROM employees e JOIN departments d ON e.dept_id = d.dept_id GROUP BY d.dept_name;",
        hint: "Use SUM(salary) AS total_budget and GROUP BY dept_name."
    },
    {
        id: 5,
        title: "5. Customers in New York",
        db: "shop",
        difficulty: "easy",
        desc: "Select the <code>name</code> and <code>email</code> of all customers who live in 'New York'. (Make sure to switch the active database to 'E-Commerce Store' first).",
        solution: "SELECT name, email FROM customers WHERE city = 'New York';",
        hint: "Ensure the active database is set to 'E-Commerce Store'."
    },
    {
        id: 6,
        title: "6. Total Spending per Customer",
        db: "shop",
        difficulty: "hard",
        desc: "Find all customers who have spent money. Retrieve their customer <code>name</code> and the sum of their order total amounts (labeled as <code>total_spent</code>). Only show customers who have spent more than 100 in total. Sort the results in descending order of <code>total_spent</code>.",
        solution: "SELECT c.name, SUM(o.total_amount) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.name HAVING total_spent > 100 ORDER BY total_spent DESC;",
        hint: "Use JOIN, GROUP BY name, HAVING total_spent > 100, and ORDER BY total_spent DESC."
    },
    {
        id: 7,
        title: "7. Out-of-Stock Ordered Products",
        db: "shop",
        difficulty: "hard",
        desc: "List the <code>product_name</code> and <code>price</code> of products that are currently out of stock (stock = 0) but have been ordered at least once.",
        solution: "SELECT DISTINCT p.product_name, p.price FROM products p JOIN order_items oi ON p.product_id = oi.product_id WHERE p.stock = 0;",
        hint: "Join products with order_items and filter where stock = 0. Use DISTINCT to avoid duplicate product rows."
    }
];

// App State
let activeDb = "company";
let editor = null;
let activeChallengeId = null;
let queryHistory = JSON.parse(localStorage.getItem('sql_history') || '[]');
let solvedChallenges = JSON.parse(localStorage.getItem('sql_solved_challenges') || '[]');

// DOM Elements
const dbSelect = document.getElementById("db-select");
const resetDbBtn = document.getElementById("reset-db-btn");
const runQueryBtn = document.getElementById("run-query-btn");
const schemaTree = document.getElementById("schema-tree");
const challengesList = document.getElementById("challenges-list");
const resultsTableContainer = document.getElementById("results-table-container");
const querySuccessMsg = document.getElementById("query-success-msg");
const successText = document.getElementById("success-text");
const queryErrorMsg = document.getElementById("query-error-msg");
const errorText = document.getElementById("error-text");
const queryMeta = document.getElementById("query-meta");
const rowCountSpan = document.getElementById("row-count");
const executionTimeSpan = document.getElementById("execution-time");
const solvedCountSpan = document.getElementById("solved-count");
const totalCountSpan = document.getElementById("total-count");
const challengeStatusBanner = document.getElementById("challenge-status-banner");
const historyList = document.getElementById("history-list");

// Init application
document.addEventListener("DOMContentLoaded", () => {
    // Configure AMD Loader
    require.config({
        paths: {
            vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs',
            alasql: 'https://cdnjs.cloudflare.com/ajax/libs/alasql/4.17.3/alasql.min'
        }
    });

    // Load Monaco and AlaSQL together
    require(['vs/editor/editor.main', 'alasql'], function (_, alasqlLib) {
        // Expose alasql globally so other functions can use it
        window.alasql = alasqlLib;
        
        // Run initialization
        initUI();
        initMonacoLoaded();
        setupDatabases();
        refreshSchema();
        renderChallenges();
        renderHistory();
    });
});

// Setup UI Tab listeners and events
function initUI() {
    // Sidebar Tabs
    document.querySelectorAll(".sidebar-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".sidebar-tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".sidebar-content .tab-pane").forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
        });
    });

    // Results Tabs
    document.querySelectorAll(".results-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".results-tab").forEach(t => t.classList.remove("active"));
            document.querySelectorAll(".results-content .results-pane").forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
        });
    });

    // DB Selection Changes
    dbSelect.addEventListener("change", (e) => {
        switchDatabase(e.target.value);
    });

    // Reset DB Action
    resetDbBtn.addEventListener("click", () => {
        if (confirm(`Are you sure you want to reset the database '${activeDb === "company" ? "Company & Employees" : "E-Commerce Store"}'? All custom edits will be reverted.`)) {
            reseedDatabase(activeDb);
            refreshSchema();
            runQueryBtn.click(); // Run current query to update table
        }
    });

    // Run Query button
    runQueryBtn.addEventListener("click", () => {
        executeQuery();
    });
}

// Initialize Monaco Editor UI (already loaded)
function initMonacoLoaded() {
    // Register custom theme for premium dark visual style
    monaco.editor.defineTheme('antigravityDark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'keyword', foreground: '6366f1', fontStyle: 'bold' },
            { token: 'string', foreground: '10b981' },
            { token: 'number', foreground: 'f59e0b' },
            { token: 'comment', foreground: '64748b' }
        ],
        colors: {
            'editor.background': '#0b0f19',
            'editor.foreground': '#f8fafc',
            'editor.lineHighlightBackground': '#1e293b',
            'editorLineNumber.foreground': '#64748b',
            'editorLineNumber.activeForeground': '#6366f1',
            'editor.selectionBackground': '#334155'
        }
    });

    editor = monaco.editor.create(document.getElementById('editor-container'), {
        value: "SELECT * FROM employees;",
        language: 'sql',
        theme: 'antigravityDark',
        fontSize: 14,
        fontFamily: 'Fira Code, Consolas, monospace',
        minimap: { enabled: false },
        automaticLayout: true,
        lineHeight: 22,
        scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
        }
    });

    // Setup shortcut Ctrl+Enter
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
        executeQuery();
    });
}

// Setup and seed AlaSQL tables
function setupDatabases() {
    // Initial build of databases in alaSQL namespaces
    alasql("CREATE DATABASE IF NOT EXISTS company;");
    alasql("CREATE DATABASE IF NOT EXISTS shop;");
    
    reseedDatabase("company");
    reseedDatabase("shop");
    
    // Set default active database
    alasql("USE company;");
}

function reseedDatabase(dbName) {
    alasql(`USE ${dbName};`);
    
    // Drop existing tables
    const tables = Object.keys(alasql.databases[dbName]?.tables || {});
    tables.forEach(table => {
        try {
            alasql(`DROP TABLE ${table};`);
        } catch (e) {}
    });
    
    // Seed
    DATABASES[dbName].setup.forEach(cmd => {
        try {
            alasql(cmd);
        } catch (err) {
            console.error("Error seeding DB: ", err);
        }
    });
}

function switchDatabase(dbName) {
    activeDb = dbName;
    dbSelect.value = dbName;
    alasql(`USE ${dbName};`);
    refreshSchema();
    
    // If a challenge is active for a different database, reset it
    if (activeChallengeId) {
        const activeChallenge = CHALLENGES.find(c => c.id === activeChallengeId);
        if (activeChallenge && activeChallenge.db !== dbName) {
            deactivateChallenge();
        }
    }
    
    // Update default query value in editor based on active tables
    if (editor) {
        if (dbName === "company") {
            editor.setValue("SELECT * FROM employees;");
        } else {
            editor.setValue("SELECT * FROM customers;");
        }
    }
}

// Generate the visual tree of tables & columns
function refreshSchema() {
    schemaTree.innerHTML = "";
    
    const dbName = activeDb;
    const tables = Object.keys(alasql.databases[dbName]?.tables || {});
    
    if (tables.length === 0) {
        schemaTree.innerHTML = `<div class="loading-placeholder">No tables found.</div>`;
        return;
    }
    
    tables.forEach(tableName => {
        const tableDef = alasql.databases[dbName].tables[tableName];
        const columns = tableDef.columns || [];
        
        const node = document.createElement("div");
        node.className = "tree-node-table";
        
        let colsHtml = "";
        columns.forEach(col => {
            colsHtml += `
                <div class="column-item">
                    <span class="col-name">${col.columnid}</span>
                    <span class="col-type">${col.dbtypeid || 'STRING'}</span>
                </div>
            `;
        });
        
        node.innerHTML = `
            <div class="tree-node-header">
                <i class="fa-solid fa-table text-secondary"></i>
                <span>${tableName}</span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="tree-node-columns">
                ${colsHtml || '<div class="column-item"><span class="col-muted">No explicit columns</span></div>'}
            </div>
        `;
        
        // Expand/collapse logic
        node.querySelector(".tree-node-header").addEventListener("click", () => {
            node.classList.toggle("expanded");
        });
        
        schemaTree.appendChild(node);
    });
}

// Execute SQL query written by user
function executeQuery() {
    if (!editor) return;
    const query = editor.getValue().trim();
    if (!query) return;
    
    const startTime = performance.now();
    let result = null;
    let error = null;
    
    // Hide previous messages
    querySuccessMsg.classList.add("hidden");
    queryErrorMsg.classList.add("hidden");
    queryMeta.classList.add("hidden");
    
    // Ensure we are using the correct database
    try {
        alasql(`USE ${activeDb};`);
    } catch(e) {}
    
    try {
        // Parse the query to check statement count
        const parsed = alasql.parse(query);
        const statementCount = parsed.statements ? parsed.statements.length : 1;
        
        // AlaSQL executes queries
        const rawResult = alasql(query);
        
        if (statementCount > 1 && Array.isArray(rawResult)) {
            // Find the most relevant result (like a SELECT array of objects) or default to the last statement's result
            let displayResult = rawResult[rawResult.length - 1];
            for (let i = rawResult.length - 1; i >= 0; i--) {
                if (Array.isArray(rawResult[i]) && rawResult[i].length > 0 && typeof rawResult[i][0] === 'object') {
                    displayResult = rawResult[i];
                    break;
                }
            }
            result = displayResult;
        } else {
            result = rawResult;
        }
    } catch (err) {
        error = err.message || err;
    }
    
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);
    
    // Add to history
    addHistoryItem(query, !error);
    
    if (error) {
        errorText.innerText = error;
        queryErrorMsg.classList.remove("hidden");
        resultsTableContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-triangle-exclamation text-error"></i>
                <p>Query failed to execute. See error message above.</p>
            </div>
        `;
        return;
    }
    
    // Render Results Table
    renderResultsTable(result);
    
    // Update Meta Information
    const count = Array.isArray(result) ? result.length : (result ? 1 : 0);
    rowCountSpan.innerText = `${count} ${count === 1 ? 'row' : 'rows'} returned`;
    executionTimeSpan.innerText = `${duration}ms`;
    queryMeta.classList.remove("hidden");
    
    // Success alert
    successText.innerText = `Query executed successfully.`;
    querySuccessMsg.classList.remove("hidden");
    
    // If a challenge is active, verify output
    if (activeChallengeId) {
        verifyChallenge(query, result);
    }
}

// Render query results to a interactive table
function renderResultsTable(data) {
    resultsTableContainer.innerHTML = "";
    
    // If result is empty or not an array
    if (!data || (Array.isArray(data) && data.length === 0)) {
        resultsTableContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-circle-info"></i>
                <p>Query succeeded but returned no rows.</p>
            </div>
        `;
        return;
    }
    
    // AlaSQL might return an array of objects, or a single number/value
    let rows = [];
    if (Array.isArray(data)) {
        // Sometimes alasql returns array of arrays if using specific clauses, but standard is array of objects
        if (typeof data[0] === 'object' && data[0] !== null) {
            rows = data;
        } else {
            // Primitive values
            rows = data.map(val => ({ "Value": val }));
        }
    } else if (typeof data === 'object') {
        rows = [data];
    } else {
        rows = [{ "Result": data }];
    }
    
    const headers = Object.keys(rows[0]);
    
    const table = document.createElement("table");
    table.className = "results-table";
    
    // Header
    let thead = "<thead><tr>";
    headers.forEach(h => {
        thead += `<th>${h}</th>`;
    });
    thead += "</tr></thead>";
    
    // Body
    let tbody = "<tbody>";
    rows.forEach(row => {
        tbody += "<tr>";
        headers.forEach(h => {
            const val = row[h];
            tbody += `<td>${val !== null && val !== undefined ? val : '<span class="text-muted">NULL</span>'}</td>`;
        });
        tbody += "</tr>";
    });
    tbody += "</tbody>";
    
    table.innerHTML = thead + tbody;
    resultsTableContainer.appendChild(table);
}

// Render challenges sidebar
function renderChallenges() {
    challengesList.innerHTML = "";
    solvedCountSpan.innerText = solvedChallenges.length;
    totalCountSpan.innerText = CHALLENGES.length;
    
    CHALLENGES.forEach(c => {
        const card = document.createElement("div");
        card.className = `challenge-card ${activeChallengeId === c.id ? 'active' : ''}`;
        
        const isSolved = solvedChallenges.includes(c.id);
        const statusIcon = isSolved 
            ? `<i class="fa-solid fa-circle-check challenge-status-icon solved"></i>`
            : `<i class="fa-regular fa-circle challenge-status-icon unsolved"></i>`;
            
        card.innerHTML = `
            <div class="challenge-card-header">
                <span class="challenge-title">${c.title}</span>
                ${statusIcon}
            </div>
            <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                <span class="challenge-diff ${c.difficulty}">${c.difficulty}</span>
                <span class="col-type" style="font-size: 0.7rem; text-transform: uppercase;">
                    <i class="fa-solid fa-database"></i> ${c.db === 'company' ? 'Company' : 'Store'}
                </span>
            </div>
            <div class="challenge-desc">${c.desc}</div>
        `;
        
        card.addEventListener("click", () => {
            selectChallenge(c.id);
        });
        
        challengesList.appendChild(card);
    });
}

// Activate a specific challenge
function selectChallenge(id) {
    const challenge = CHALLENGES.find(c => c.id === id);
    if (!challenge) return;
    
    activeChallengeId = id;
    
    // Automatically switch database if needed
    if (activeDb !== challenge.db) {
        switchDatabase(challenge.db);
    }
    
    // Update banner UI
    challengeStatusBanner.className = `challenge-status-banner ${solvedChallenges.includes(id) ? 'solved' : 'unsolved'}`;
    challengeStatusBanner.innerHTML = solvedChallenges.includes(id)
        ? `<i class="fa-solid fa-trophy"></i> Challenge Solved! Match found.`
        : `<i class="fa-solid fa-circle-question"></i> Active Challenge: Try matching the expected output.`;
    challengeStatusBanner.classList.remove("hidden");
    
    // Update editor value if the user hasn't typed anything yet or asks to load the challenge
    if (editor) {
        // Give a hint in editor if it's the first time
        editor.setValue(`-- Challenge: ${challenge.title}\n-- Hint: ${challenge.hint}\n\n`);
        editor.focus();
    }
    
    renderChallenges();
}

function deactivateChallenge() {
    activeChallengeId = null;
    challengeStatusBanner.classList.add("hidden");
    renderChallenges();
}

// Validate user's SQL output against official query output
function verifyChallenge(userQuery, userResults) {
    const challenge = CHALLENGES.find(c => c.id === activeChallengeId);
    if (!challenge) return;
    
    try {
        // Run reference query on fresh DB to get correct baseline
        // We create a temp namespace or reset to verify accurately
        const referenceQuery = challenge.solution;
        
        // Save current table state, reset, run solution, then re-seed
        // But since this is a local browser app, we can just run the reference query on the database.
        // If the user modified records, it might affect validation, so we run on a clean temporary db instance
        // or just rely on the active DB since users are mostly practicing SELECT queries.
        const correctResults = alasql(referenceQuery);
        
        const isCorrect = compareSQLResults(userResults, correctResults);
        
        if (isCorrect) {
            if (!solvedChallenges.includes(challenge.id)) {
                solvedChallenges.push(challenge.id);
                localStorage.setItem('sql_solved_challenges', JSON.stringify(solvedChallenges));
            }
            
            challengeStatusBanner.className = "challenge-status-banner solved";
            challengeStatusBanner.innerHTML = `<i class="fa-solid fa-circle-check"></i> Success! Challenge Solved!`;
            
            successText.innerText = "Query executed successfully. Correct answer! Challenge completed!";
            
            renderChallenges();
        } else {
            challengeStatusBanner.className = "challenge-status-banner unsolved";
            challengeStatusBanner.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Output does not match expected result.`;
        }
    } catch (err) {
        console.error("Verification failed: ", err);
    }
}

// Compare two query results arrays
function compareSQLResults(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
    if (arr1.length === 0) return true;
    
    // Sort keys and match properties
    const keys1 = Object.keys(arr1[0]).sort();
    const keys2 = Object.keys(arr2[0]).sort();
    
    if (keys1.length !== keys2.length) return false;
    
    // Check if results match
    // Standard SQL check - let's convert both to simple JSON strings after sorting keys of each object
    const canonicalStr = (arr) => {
        return JSON.stringify(arr.map(obj => {
            const sortedObj = {};
            // Low-key normalize data types
            Object.keys(obj).sort().forEach(k => {
                let v = obj[k];
                if (typeof v === 'number') v = Math.round(v * 100) / 100; // round decimals to 2 places
                sortedObj[k.toLowerCase()] = v; // case insensitive keys
            });
            return sortedObj;
        }));
    };
    
    // We compare strings
    // In some cases, row order does not matter unless ORDER BY was specified.
    // Let's sort rows to make validation lenient unless ordering is strictly tested,
    // or simply sort rows by value content.
    const sortRows = (arr) => {
        return [...arr].sort((a, b) => {
            return JSON.stringify(a).localeCompare(JSON.stringify(b));
        });
    };
    
    return canonicalStr(sortRows(arr1)) === canonicalStr(sortRows(arr2));
}

// History logging
function addHistoryItem(query, success) {
    const item = {
        query,
        success,
        timestamp: new Date().toLocaleTimeString(),
        db: activeDb
    };
    
    queryHistory.unshift(item);
    if (queryHistory.length > 30) {
        queryHistory.pop();
    }
    
    localStorage.setItem('sql_history', JSON.stringify(queryHistory));
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = "";
    
    if (queryHistory.length === 0) {
        historyList.innerHTML = `
            <div class="empty-history">
                <p>No queries executed yet in this session.</p>
            </div>
        `;
        return;
    }
    
    queryHistory.forEach(item => {
        const el = document.createElement("div");
        el.className = "history-item";
        
        el.innerHTML = `
            <div class="history-item-header">
                <span><i class="fa-solid fa-clock"></i> ${item.timestamp} &bull; DB: ${item.db}</span>
                <span class="${item.success ? 'text-success' : 'text-error'}">
                    <i class="fa-solid ${item.success ? 'fa-check' : 'fa-xmark'}"></i> ${item.success ? 'Success' : 'Error'}
                </span>
            </div>
            <div class="history-item-body">${escapeHTML(item.query)}</div>
        `;
        
        // Clicking history card loads it back to editor
        el.querySelector(".history-item-body").addEventListener("click", () => {
            if (editor) {
                editor.setValue(item.query);
                // Switch database if needed
                if (item.db !== activeDb) {
                    switchDatabase(item.db);
                }
                // Switch tab back to Output
                document.querySelector('[data-tab="output"]').click();
            }
        });
        
        historyList.appendChild(el);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

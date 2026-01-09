const users = [
    { username:"admin", password:"1234", name:"Admin", email:"admin@gmail.com", phone:"9000000000", role:"Admin" },
    { username:"Ravi Kumar", password:"1111", name:"Ravi Kumar", email:"ravi@gmail.com", phone:"9000000001", role:"Student" },
    { username:"Sita Devi", password:"2222", name:"Sita Devi", email:"sita@gmail.com", phone:"9000000002", role:"Teacher" },
    { username:"Arjun", password:"3333", name:"Arjun", email:"arjun@gmail.com", phone:"9000000003", role:"Student" },
    { username:"Kiran", password:"4444", name:"Kiran", email:"kiran@gmail.com", phone:"9000000004", role:"Student" },
    { username:"Lakshmi", password:"5555", name:"Lakshmi", email:"lakshmi@gmail.com", phone:"9000000005", role:"Teacher" },
    { username:"Latha", password:"6666", name:"Latha", email:"latha@gmail.com", phone:"9000000006", role:"Student" },
    { username:"Pooja", password:"7777", name:"Pooja", email:"pooja@gmail.com", phone:"9000000007", role:"Student" },
    { username:"Rahul", password:"8888", name:"Rahul", email:"rahul@gmail.com", phone:"9000000008", role:"Student" },
    { username:"Anita", password:"9999", name:"Anita", email:"anita@gmail.com", phone:"9000000009", role:"Teacher" }
];

const defaultImage = "https://res.cloudinary.com/dyverf4kj/image/upload/v1767858484/Screenshot_2026-01-08_132101_ycgfgy.png";

const preloadedBooks = {
    "Ravi Kumar":[
        {title:"Ravi Kumar Book 1", author:"Albert Einstein", category:"Fiction", dueDate:"2026-01-10", image:defaultImage},
        {title:"Ravi Kumar Book 1", author:"Emily Bronte",    category:"Science", dueDate:"2026-01-15", image:defaultImage},
        {title:"Ravi Kumar Book 1", author:"Isaac Newton",    category:"History", dueDate:"2026-01-20", image:defaultImage},
        {title:"Ravi Kumar Book 2", author:"Albert Einstein", category:"Fiction", dueDate:"2026-01-25", image:defaultImage},
        {title:"Ravi Kumar Book 2", author:"Homer",           category:"Science", dueDate:"2026-02-01", image:defaultImage}
    ],
    "Sita Devi":[
        {title:"Sita Devi Book 1", author:"Emily Bronte",        category:"Fiction", dueDate:"2026-01-12", image:defaultImage},
        {title:"Sita Devi Book 1", author:"Isaac Newton",        category:"Science", dueDate:"2026-01-17", image:defaultImage},
        {title:"Sita Devi Book 2", author:"Albert Einstein",     category:"Science", dueDate:"2026-01-22", image:defaultImage},
        {title:"Sita Devi Book 1", author:"Homer",               category:"History", dueDate:"2026-01-27", image:defaultImage},
        {title:"Sita Devi Book 2", author:"William Shakespeare", category:"Fiction", dueDate:"2026-02-02", image:defaultImage}
    ],
    "Arjun":[
        {title:"Arjun Book 1", author:"JK Rowling",      category:"Fiction", dueDate:"2026-01-11", image:defaultImage},
        {title:"Arjun Book 1", author:"Stephen Hawking", category:"Science", dueDate:"2026-01-16", image:defaultImage},
        {title:"Arjun Book 1", author:"George Orwell",   category:"History", dueDate:"2026-01-21", image:defaultImage},
        {title:"Arjun Book 2", author:"Jules Verne",     category:"Science", dueDate:"2026-01-26", image:defaultImage},
        {title:"Arjun Book 2", author:"Agatha Christie", category:"Fiction", dueDate:"2026-01-31", image:defaultImage}
    ],
    
    "Kiran": [
        { title:"Kiran Book 1", author:"Agatha Christie",     category:"Mystery", dueDate:"2026-01-11", image: defaultImage },
        { title:"Kiran Book 2", author:"Stephen King",        category:"Fiction", dueDate:"2026-01-16", image: defaultImage },
        { title:"Kiran Book 3", author:"Neil deGrasse Tyson", category:"Science", dueDate:"2026-01-21", image: defaultImage },
        { title:"Kiran Book 4", author:"Dan Brown",           category:"Mystery", dueDate:"2026-01-27", image: defaultImage },
        { title:"Kiran Book 5", author:"Leo Tolstoy",         category:"Fiction", dueDate:"2026-02-01", image: defaultImage },
    ],
    "Lakshmi": [
        { title:"Lakshmi Book 1", author:"Isaac Asimov",       category:"Science", dueDate:"2026-01-10", image: defaultImage },
        { title:"Lakshmi Book 2", author:"Mary Shelley",       category:"Fiction", dueDate:"2026-01-15", image: defaultImage },
        { title:"Lakshmi Book 3", author:"Charles Dickens",    category:"History", dueDate:"2026-01-20", image: defaultImage },
        { title:"Lakshmi Book 4", author:"Jane Austen",        category:"Fiction", dueDate:"2026-01-26", image: defaultImage },
        { title:"Lakshmi Book 5", author:"Arthur Conan Doyle", category:"Mystery", dueDate:"2026-02-02", image: defaultImage },
    ],
    "Latha": [
        { title:"Manoj Book 1", author:"Ernest Hemingway", category:"Fiction", dueDate:"2026-01-12", image: defaultImage },
        { title:"Manoj Book 2", author:"Carl Sagan",       category:"Science", dueDate:"2026-01-17", image: defaultImage },
        { title:"Manoj Book 3", author:"Mark Twain",       category:"History", dueDate:"2026-01-22", image: defaultImage },
        { title:"Manoj Book 4", author:"H.G. Wells",       category:"Science", dueDate:"2026-01-28", image: defaultImage },
        { title:"Manoj Book 5", author:"J.K. Rowling",     category:"Fiction", dueDate:"2026-02-03", image: defaultImage },
    ],
    "Pooja": [
        { title:"Pooja Book 1", author:"George Orwell", category:"Fiction", dueDate:"2026-01-13", image: defaultImage },
        { title:"Pooja Book 2", author:"Rachel Carson", category:"Science", dueDate:"2026-01-18", image: defaultImage },
        { title:"Pooja Book 3", author:"Harper Lee",    category:"Fiction", dueDate:"2026-01-23", image: defaultImage },
        { title:"Pooja Book 4", author:"Mary Shelley",  category:"Fiction", dueDate:"2026-01-29", image: defaultImage },
        { title:"Pooja Book 5", author:"Jules Verne",   category:"Science", dueDate:"2026-02-04", image: defaultImage },
    ],
    "Rahul": [
        { title:"Rahul Book 1", author:"Leo Tolstoy",     category:"Fiction", dueDate:"2026-01-14", image: defaultImage },
        { title:"Rahul Book 2", author:"Stephen Hawking", category:"Science", dueDate:"2026-01-19", image: defaultImage },
        { title:"Rahul Book 3", author:"Agatha Christie", category:"Mystery", dueDate:"2026-01-24", image: defaultImage },
        { title:"Rahul Book 4", author:"Homer",           category:"History", dueDate:"2026-01-30", image: defaultImage },
        { title:"Rahul Book 5", author:"J.K. Rowling",    category:"Fiction", dueDate:"2026-02-05", image: defaultImage },
    ],
    "Anita": [
        { title:"Anita Book 1", author:"Charles Dickens",    category:"History", dueDate:"2026-01-11", image: defaultImage },
        { title:"Anita Book 2", author:"Jane Austen",        category:"Fiction", dueDate:"2026-01-16", image: defaultImage },
        { title:"Anita Book 3", author:"Isaac Newton",       category:"Science", dueDate:"2026-01-21", image: defaultImage },
        { title:"Anita Book 4", author:"Mary Shelley",       category:"Fiction", dueDate:"2026-01-27", image: defaultImage },
        { title:"Anita Book 5", author:"Arthur Conan Doyle", category:"Mystery", dueDate:"2026-02-01", image: defaultImage },
    ]
    // Add other users similarly...
};

let currentUser = null;
let books = [];

/* ---------- DOM ELEMENTS ---------- */
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBox = document.getElementById("loginBox");
const libraryBox = document.getElementById("libraryBox");
const userDetails = document.getElementById("userDetails");
const title = document.getElementById("title");
const author = document.getElementById("author");
const image = document.getElementById("image");
const category = document.getElementById("category");
const dueDate = document.getElementById("dueDate");
const bookList = document.getElementById("bookList");
const search = document.getElementById("search");

/* ---------- LOGIN ---------- */
function login() {
    const u = username.value;
    const p = password.value;

    const user = users.find(x => x.username === u && x.password === p);

    if (user) {
        currentUser = user;
        localStorage.setItem("loggedUser", JSON.stringify(user));
        showLibrary();
    } else {
        alert("Invalid Login");
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
    location.reload();
}

/* ---------- SHOW LIBRARY ---------- */
function showLibrary() {
    loginBox.classList.add("hidden");
    libraryBox.classList.remove("hidden");
    showUserDetails();
    loadLibrary();
}

/* ---------- AUTO LOGIN ---------- */
const storedUser = localStorage.getItem("loggedUser");
if (storedUser) {
    currentUser = JSON.parse(storedUser);
    showLibrary();
}

/* ---------- SHOW USER DETAILS ---------- */
function showUserDetails() {
    userDetails.innerHTML = `
        <b>Name:</b> ${currentUser.name}<br>
        <b>Username:</b> ${currentUser.username}<br>
        <b>Email:</b> ${currentUser.email}<br>
        <b>Phone:</b> ${currentUser.phone}<br>
        <b>Role:</b> ${currentUser.role}<hr>
    `;
}

/* ---------- LOAD LIBRARY ---------- */
function loadLibrary() {
    if(currentUser.role === "Admin"){
        displayUsersForAdmin();
    } else {
        books = JSON.parse(localStorage.getItem("books_" + currentUser.username)) || preloadedBooks[currentUser.username] || [];
        if(books.length === 0 && preloadedBooks[currentUser.username]){
            books = preloadedBooks[currentUser.username];
            localStorage.setItem("books_" + currentUser.username, JSON.stringify(books));
        }
        displayBooks();
    }
}

/* ---------- DISPLAY USERS (ADMIN ONLY) ---------- */
function displayUsersForAdmin() {
    bookList.innerHTML = "<h2>All Users</h2>";
    users.forEach(user => {
        if(user.username === "admin") return; // skip admin themselves
        const userBooks = JSON.parse(localStorage.getItem("books_" + user.username)) || preloadedBooks[user.username] || [];
        bookList.innerHTML += `
        <li>
            <strong>Name:</strong> ${user.name}<br>
            <strong>Username:</strong> ${user.username}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Phone:</strong> ${user.phone}<br>
            <strong>Role:</strong> ${user.role}<br>
            <strong>Books Taken:</strong> ${userBooks.length} book(s)
        </li><hr>`;
    });
}

/* ---------- SAVE BOOKS ---------- */
function saveBooks() {
    localStorage.setItem("books_" + currentUser.username, JSON.stringify(books));
}

/* ---------- CRUD (for Students/Teachers) ---------- */
function addBook() {
    books.push({
        title: title.value,
        author: author.value,
        image: image.value || defaultImage,
        category: category.value,
        dueDate: dueDate.value
    });
    saveBooks();
    loadLibrary();
}

function deleteBook(i) {
    books.splice(i, 1);
    saveBooks();
    loadLibrary();
}

function editBook(i) {
    const b = books[i];
    title.value = b.title;
    author.value = b.author;
    image.value = b.image;
    category.value = b.category;
    dueDate.value = b.dueDate;
    deleteBook(i);
}

/* ---------- DISPLAY BOOKS ---------- */
function displayBooks(list = books) {
    bookList.innerHTML = "";
    list.forEach((b, i) => {
        bookList.innerHTML += `
        <li>
            <img src="${b.image}" onerror="this.src='${defaultImage}'">
            <div>
                <strong>${b.title}</strong><br>
                ${b.author}<br>
                ${b.category}<br>
                Due: ${b.dueDate || "N/A"}
            </div>
            <button onclick="editBook(${i})">Edit</button>
            <button onclick="deleteBook(${i})">Delete</button>
        </li>`;
    });
}

/* ---------- SEARCH ---------- */
function searchBooks() {
    const q = search.value.toLowerCase();

    if(currentUser.role === "Admin"){
        const filteredUsers = users.filter(user =>
            user.username.toLowerCase().includes(q) ||
            user.name.toLowerCase().includes(q) ||
            user.role.toLowerCase().includes(q)
        );
        bookList.innerHTML = "<h2>Search Results</h2>";
        filteredUsers.forEach(user => {
            if(user.username === "admin") return;
            const userBooks = JSON.parse(localStorage.getItem("books_" + user.username)) || preloadedBooks[user.username] || [];
            bookList.innerHTML += `
            <li>
                <strong>Name:</strong> ${user.name}<br>
                <strong>Username:</strong> ${user.username}<br>
                <strong>Email:</strong> ${user.email}<br>
                <strong>Phone:</strong> ${user.phone}<br>
                <strong>Role:</strong> ${user.role}<br>
                <strong>Books Taken:</strong> ${userBooks.length} book(s)
            </li><hr>`;
        });
    } else {
        displayBooks(
            books.filter(b =>
                b.title.toLowerCase().includes(q) ||
                b.author.toLowerCase().includes(q)
            )
        );
    }
}










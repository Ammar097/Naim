function showBorrowForm() {
    document.getElementById("borrowForm").classList.remove("hidden");
    document.getElementById("userInfo").classList.add("hidden");
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("borrowButton").classList.add("hidden");
    document.getElementById("returnButton").classList.add("hidden");
}

function showReturnForm() {
    document.getElementById("returnForm").classList.remove("hidden");
    document.getElementById("userInfo").classList.add("hidden");
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("borrowForm").classList.add("hidden");
    document.getElementById("borrowButton").classList.add("hidden");
    document.getElementById("returnButton").classList.add("hidden");
}

function fetchUserData() {
    const icInput = document.getElementById("icInput").value;

    // Simulate fetching user data from the server based on IC (replace with actual API call)
    // In a real system, you would make an AJAX request to your server here.
    const userData = {
        name: "John Doe",
        class: "Class A"
    };

    // Display user information
    document.getElementById("userName").textContent = userData.name;
    document.getElementById("userClass").textContent = userData.class;

    // Hide the IC input form and show the user information form
    document.getElementById("borrowForm").classList.add("hidden");
    document.getElementById("userInfo").classList.remove("hidden");
}

function submitBorrow() {
    // Get values from the form
    const icNumber = document.getElementById("icInput").value;
    const borrowerName = document.getElementById("userName").textContent;
    const borrowerClass = document.getElementById("userClass").textContent;
    const bookName = document.getElementById("bookName").value;
    const bookAuthor = document.getElementById("author").value;
    const bookYear = document.getElementById("publishedYear").value;
    const borrowDate = document.getElementById("dateBorrow").value;
    const returnDate = document.getElementById("dateReturn").value;

    // Display the submitted information
    document.getElementById("icNumber").textContent = icNumber;
    document.getElementById("borrowerName").textContent = borrowerName;
    document.getElementById("borrowerClass").textContent = borrowerClass;
    document.getElementById("bookNameInfo").textContent = bookName;
    document.getElementById("bookAuthorInfo").textContent = bookAuthor;
    document.getElementById("bookYearInfo").textContent = bookYear;
    document.getElementById("borrowDateInfo").textContent = borrowDate;
    document.getElementById("returnDateInfo").textContent = returnDate;

    // Show the confirmation form
    document.getElementById("userInfo").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
}

// ... (previous code)

function fetchReturnUserData() {
    const returnIcInput = document.getElementById("returnIcInput").value;

    // Simulate fetching user data from the server based on IC (replace with actual API call)
    // In a real system, you would make an AJAX request to your server here.
    const returnUserData = {
        name: "Jane Doe",
        class: "Class B",
        icNumber: returnIcInput,
        bookName: "Book ABC",
        bookAuthor: "Author XYZ",
        bookYear: "2022",
        borrowDate: "2023-01-01",
        returnDate: "2023-01-15"
    };

    // Display user information for return
    document.getElementById("returnUserName").textContent = returnUserData.name;
    document.getElementById("returnIcNumber").textContent = returnUserData.icNumber;
    document.getElementById("returnUserClass").textContent = returnUserData.class;
    document.getElementById("returnBookNameInfo").textContent = returnUserData.bookName;
    document.getElementById("returnBookAuthorInfo").textContent = returnUserData.bookAuthor;
    document.getElementById("returnBookYearInfo").textContent = returnUserData.bookYear;
    document.getElementById("returnBorrowDateInfo").textContent = returnUserData.borrowDate;
    document.getElementById("returnReturnDateInfo").textContent = returnUserData.returnDate;

    // Hide the IC input form and show the user information form for return
    document.getElementById("returnForm").classList.add("hidden");
    document.getElementById("returnUserInfo").classList.remove("hidden");
}
// ... (remaining code)


function submitReturn() {
    // Implement book return submission logic here
    alert("Terima Kasih! Jangan Lupa Pinjam Lagi"); // Replace with actual logic

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.html";
}

function showCongratulations() {
    // Display a congratulatory message
    alert("Selamat Membaca!");

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.html";
}


function goBack() {
    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.html";
}


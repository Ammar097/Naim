function showBorrowForm() {
    document.getElementById("borrowForm").classList.remove("hidden");
    document.getElementById("userInfo").classList.add("hidden");
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("actionButtons").classList.add("hidden");
}

function showReturnForm() {
    document.getElementById("returnForm").classList.remove("hidden");
    document.getElementById("userInfo").classList.add("hidden");
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("actionButtons").classList.add("hidden");
}


function fetchUserData() {
    const icInput = document.getElementById("icInput").value;

    fetch("config.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "ic_number=" + icInput,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showUserInfoForm(data.userData);
        } else {
            alert("User not found.");
        }
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });
}

function showUserInfoForm(userData) {
    console.log("Showing UserInfo Form");
    document.getElementById("userName").textContent = userData.name;
    document.getElementById("userClass").textContent = userData.class;
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

function fetchReturnUserData() {
    const returnIcInput = document.getElementById("returnIcInput").value;

    fetch("config.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "ic_number=" + returnIcInput,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showReturnUserInfoForm(data.userData);
        } else {
            alert("User not found.");
        }
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });
}

function showReturnUserInfoForm(userData) {
    console.log("Showing Return UserInfo Form");
    document.getElementById("returnUserName").textContent = userData.name;
    document.getElementById("returnIcNumber").textContent = userData.icNumber;
    document.getElementById("returnUserClass").textContent = userData.class;
    document.getElementById("returnBookNameInfo").textContent = userData.bookName;
    document.getElementById("returnBookAuthorInfo").textContent = userData.bookAuthor;
    document.getElementById("returnBookYearInfo").textContent = userData.bookYear;
    document.getElementById("returnBorrowDateInfo").textContent = userData.borrowDate;
    document.getElementById("returnReturnDateInfo").textContent = userData.returnDate;

    // Hide the IC input form and show the user information form for return
    document.getElementById("returnForm").classList.add("hidden");
    document.getElementById("returnUserInfo").classList.remove("hidden");
}

function fetchReturnCheckData() {
    const returnCheckIcInput = document.getElementById("returnCheckIcInput").value;

    fetch("config.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "ic_number=" + returnCheckIcInput,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showReturnCheckResult(data.returnCheckData);
        } else {
            alert("User not found.");
        }
    })
    .catch(error => {
        console.error("Error fetching return check data:", error);
    });
}

function showReturnCheckResult(returnCheckData) {
    console.log("Showing Return Check Result");
    document.getElementById("returnDateResult").textContent = returnCheckData.returnDate;

    // Show the return check result form
    document.getElementById("returnCheckForm").classList.add("hidden");
    document.getElementById("returnCheckResult").classList.remove("hidden");
}


function submitReturn() {
    // Implement book return submission logic here
    alert("Terima Kasih! Jangan Lupa Pinjam Lagi"); // Replace with actual logic

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.php";
}

function showCongratulations() {
    // Display a congratulatory message
    alert("Selamat Membaca!");

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.php";
}


function goBack() {
    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.php";
}

// ... (previous code)

function showStudentOptions() {
    document.getElementById("loginOptions").classList.add("hidden");
    document.getElementById("adminLoginForm").classList.add("hidden");
    document.getElementById("actionButtons").classList.remove("hidden");
}

function showAdminLogin() {
    document.getElementById("loginOptions").classList.add("hidden");
    document.getElementById("adminLoginForm").classList.remove("hidden");
}

function adminLogin() {
    const adminPassword = document.getElementById("adminPassword").value;

    // Check if the entered password is correct
    if (adminPassword === "1") {
        document.getElementById("adminLoginForm").classList.add("hidden");
        document.getElementById("actionButtons").classList.remove("hidden");
    } else {
        alert("Invalid password. Try again.");
    }
}

// ... (remaining code)

function showStudentOptions() {
    // Hide the login options and show the check return button
    document.getElementById("loginOptions").classList.add("hidden");
    document.getElementById("checkReturnButton").classList.remove("hidden");

    // Hide the borrow and return buttons
    document.getElementById("actionButtons").classList.add("hidden");
}

function showReturnCheckForm() {
    document.getElementById("checkReturnButton").classList.add("hidden");
    document.getElementById("returnCheckForm").classList.remove("hidden");
}

function fetchReturnCheckData() {
    const returnCheckIcInput = document.getElementById("returnCheckIcInput").value;

    // Simulate fetching return check data from the server (replace with actual API call)
    // In a real system, you would make an AJAX request to your server here.
    const returnCheckData = {
        returnDate: "2023-01-15"
    };

    // Display return check result
    document.getElementById("returnDateResult").textContent = returnCheckData.returnDate;

    // Show the return check result form
    document.getElementById("returnCheckForm").classList.add("hidden");
    document.getElementById("returnCheckResult").classList.remove("hidden");
}

function submitReturn() {
    // Implement book return submission logic here
    alert("Terima Kasih! Jangan Lupa Pinjam Lagi"); // Replace with actual logic

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.php";
}

function showCongratulations() {
    // Display a congratulatory message
    alert("THANK YOU!");

    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.php";
}



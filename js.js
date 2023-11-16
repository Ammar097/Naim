function fetchUserData() {
    const icInput = document.getElementById("icInput").value;

    // Simulate fetching user data from the server based on IC (replace with actual API call)
    // In a real system, you would make an AJAX request to your server here.
    const userData = {
        name: "John Doe",
        icNumber: "123456789",
        class: "Class A",
        bookName: "Sample Book",
        author: "Sample Author",
        publishedYear: "2022",
        dateBorrow: "2023-01-01",
        dateReturn: "2023-01-15"
    };

    // Display user information
    document.getElementById("userName").textContent = userData.name;
    document.getElementById("icNumber").textContent = userData.icNumber;
    document.getElementById("userClass").textContent = userData.class;

    // Display book information
    document.getElementById("bookName").textContent = userData.bookName;
    document.getElementById("author").textContent = userData.author;
    document.getElementById("publishedYear").textContent = userData.publishedYear;
    document.getElementById("dateBorrow").textContent = userData.dateBorrow;
    document.getElementById("dateReturn").textContent = userData.dateReturn;

    // Hide the IC input form and show the user information form
    document.getElementById("userInfo").classList.remove("hidden");
}

function confirmReturn() {
    // Implement book return confirmation logic here
    alert("Book return confirmed!");
    // Redirect the user to another page or perform other actions
    // For example, you can navigate back to the first display of the system
    window.location.href = "index.html";
}

function goBack() {
    // Navigate back to the first display of the system (index.html)
    window.location.href = "index.html";
}

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to fetch user data based on IC
function fetchUserData($icNumber) {
    global $conn;

    $sql = "SELECT name, class FROM users WHERE ic_number = '$icNumber'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row;
    } else {
        return false; // No user found
    }
}

// Check if IC number is provided
if (isset($_POST['ic_number'])) {
    $icNumber = $_POST['ic_number'];
    $userData = fetchUserData($icNumber);

    // Return user data as JSON
    if ($userData) {
        echo json_encode(array('success' => true, 'userData' => $userData));
    } else {
        echo json_encode(array('success' => false));
    }
}

function saveBorrowedBook($icNumber, $bookName, $author, $publishedYear, $dateBorrow, $dateReturn, $borrowerName, $borrowerClass) {
    global $conn;

    $stmt = $conn->prepare("INSERT INTO borrowings (ic_number, name_book, author, published_year, date_borrow, date_return, borrower_name, borrower_class) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $icNumber, $bookName, $author, $publishedYear, $dateBorrow, $dateReturn, $borrowerName, $borrowerClass);

    if ($stmt->execute()) {
        $stmt->close();
        return true; // Successfully inserted into the database
    } else {
        $error = $stmt->error;
        $stmt->close();
        error_log("Error executing query: $error");
        return false; // Failed to insert into the database
    }
}


// Close the connection after fetching data
$conn->close();
?>

<?php
include("config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sepang Vocational College Library System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Sepang Vocational College Library System</h1>
    </header>
    <main>
        <div id="loginOptions" class="form">
            <button class="action-button" onclick="showStudentOptions()">Login As Student</button>
            <button class="action-button" onclick="showAdminLogin()">Login As Admin</button>
        </div>

        <!-- Admin Login Form -->
        <div id="adminLoginForm" class="form hidden">
            <p>Enter Admin Password:</p>
            <input type="password" id="adminPassword">
            <button class="action-button" onclick="adminLogin()">Next</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>

        <!-- Borrow and Return Buttons -->
        <div id="actionButtons" class="hidden">
            <button class="action-button" onclick="showBorrowForm()">Borrow a Book</button>
            <button class="action-button" onclick="showReturnForm()">Return a Book</button>
        </div>

        <!-- Borrow Form -->
        <div id="borrowForm" class="form hidden">
            <table>
                <tr>
                    <td>Masukkan IC:</td>
                    <td><input type="text" id="icInput"></td>
                </tr>
            </table>
            <button class="action-button" onclick="fetchUserData()">Next</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>

<!-- Return Check Button -->
<div id="checkReturnButton" class="form hidden">
    <button class="action-button" onclick="showReturnCheckForm()">Check Return Date</button>
</div>

<!-- Return Check Form -->
<div id="returnCheckForm" class="form hidden">
    <table>
        <tr>
            <td>Masukkan IC:</td>
            <td><input type="text" id="returnCheckIcInput"></td>
        </tr>
    </table>
    <button class="action-button" onclick="fetchReturnCheckData()">Next</button>
    <button class="action-button" onclick="goBack()">Back</button>
</div>

<!-- Return User Info and Book Info -->
<div id="returnUserInfo" class="form hidden">
    <p>Name: <span id="returnUserName"></span></p>
    <p>IC Number: <span id="returnIcNumber"></span></p>
    <p>Class: <span id="returnUserClass"></span></p>
    <hr>
    <h2>Book Information</h2>
    <p>Name of Book: <span id="returnBookNameInfo"></span></p>
    <p>Author: <span id="returnBookAuthorInfo"></span></p>
    <p>Published Year: <span id="returnBookYearInfo"></span></p>
    <p>Date Borrow: <span id="returnBorrowDateInfo"></span></p>
    <p>Date Return: <span id="returnReturnDateInfo"></span></p>
    <button class="action-button" onclick="submitReturn()">Pulang</button>
    <button class="action-button" onclick="goBack()">Back</button>
</div>
 

        <div id="checkReturnButton" class="form hidden">
    <button class="action-button" onclick="showReturnCheckForm()">Check Return Date</button>
</div>

<!-- Check Return Button -->
<div id="checkReturnButton" class="form hidden">
    <button class="action-button" onclick="showReturnCheckForm()">Check Return Date</button>
</div>

<!-- Return Check Form -->
<div id="returnCheckForm" class="form hidden">
    <table>
        <tr>
            <td>Masukkan IC:</td>
            <td><input type="text" id="returnCheckIcInput"></td>
        </tr>
    </table>
    <button class="action-button" onclick="fetchReturnCheckData()">Next</button>
    <button class="action-button" onclick="goBack()">Back</button>
</div>

<!-- Return Check Result -->
<div id="returnCheckResult" class="form hidden">
    <p>Name: <span id="returnUserNameResult"></span></p>
    <p>IC Number: <span id="returnIcNumberResult"></span></p>
    <p>Class: <span id="returnUserClassResult"></span></p>
    <hr>
    <h2>Book Information</h2>
    <p>Name of Book: <span id="returnBookNameResult"></span></p>
    <p>Author: <span id="returnBookAuthorResult"></span></p>
    <p>Published Year: <span id="returnBookYearResult"></span></p>
    <p>Date Borrow: <span id="returnBorrowDateResult"></span></p>
    <p>Date Return: <span id="returnReturnDateResult"></span></p>
    <button class="action-button" onclick="showCongratulations()">Done</button>
</div>

        <!-- Borrow and Return Buttons -->
        <div id="actionButtons" class="hidden">
           <button class="action-button" onclick="goToPage('borrowForm')">Borrow a Book</button>
            <button class="action-button" onclick="goToPage('returnForm')">Return a Book</button>

        </div>

        <!-- Borrow Form -->
        <div id="borrowForm" class="form hidden">
            <table>
                <tr>
                    <td>Masukkan IC:</td>
                    <td><input type="text" id="icInput"></td>
                </tr>
            </table>
            <button class="action-button" onclick="fetchUserData()">Next</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>

        <!-- Borrow User Info and Book Info -->
        <div id="userInfo" class="form hidden">
            <p>Name: <span id="userName"></span></p>
            <p>Class: <span id="userClass"></span></p>
            <hr>
            <h2>Book Information</h2>
            <input type="text" id="bookName" placeholder="Name of Book">
            <input type="text" id="author" placeholder="Author">
            <input type="text" id="publishedYear" placeholder="Published Year">
            <input type="date" id="dateBorrow" placeholder="Date Borrow">
            <input type="date" id="dateReturn" placeholder="Date Return">
            <button class="action-button" onclick="submitBorrow()">Submit</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>

        <!-- Return Form -->
        <div id="returnForm" class="form hidden">
            <table>
                <tr>
                    <td>Masukkan IC:</td>
                    <td><input type="text" id="returnIcInput"></td>
                </tr>
            </table>
            <button class="action-button" onclick="fetchReturnUserData()">Next</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>

        <!-- Return User Info and Book Info -->
        <div id="returnUserInfo" class="form hidden">
            <p>Name: <span id="returnUserName"></span></p>
            <p>IC Number: <span id="returnIcNumber"></span></p>
            <p>Class: <span id="returnUserClass"></span></p>
            <hr>
            <h2>Book Information</h2>
            <p>Name of Book: <span id="returnBookNameInfo"></span></p>
            <p>Author: <span id="returnBookAuthorInfo"></span></p>
            <p>Published Year: <span id="returnBookYearInfo"></span></p>
            <p>Date Borrow: <span id="returnBorrowDateInfo"></span></p>
            <p>Date Return: <span id="returnReturnDateInfo"></span></p>
            <button class="action-button" onclick="submitReturn()">Pulang</button>
            <button class="action-button" onclick="goBack()">Back</button>
        </div>
        
        <!-- Confirmation Message -->
        <div id="confirmation" class="result hidden">
            <div id="borrowerInfo">
                <p>IC Number: <span id="icNumber"></span></p>
                <p>Name: <span id="borrowerName"></span></p>
                <p>Class: <span id="borrowerClass"></span></p>
            </div>
            <div id="bookInfo">
                <p>Name of Book: <span id="bookNameInfo"></span></p>
                <p>Author: <span id="bookAuthorInfo"></span></p>
                <p>Published Year: <span id="bookYearInfo"></span></p>
                <p>Date Borrow: <span id="borrowDateInfo"></span></p>
                <p>Date Return: <span id="returnDateInfo"></span></p>
            </div>
            <button class="action-button" onclick="showCongratulations()">Done</button>
        </div>
    </main>
    <script src="script.js"></script>


</body>
</html>


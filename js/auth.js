// Create default admin if not exists
if (!localStorage.getItem("admin@admin.com")) {
    localStorage.setItem(
        "admin@admin.com",
        JSON.stringify({ password: "admin123", role: "admin" })
    );
}

/* ---------- SIGNUP ---------- */
function signup() {
    let username = document.getElementById("su_user").value;
    let password = document.getElementById("su_pass").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("User already exists. Please login.");
        return;
    }

    localStorage.setItem(
        username,
        JSON.stringify({ password: password, role: "user" })
    );

    // Auto login after signup
    localStorage.setItem("loggedUser", username);

    alert("Signup successful! Redirecting to Home...");
    window.location.href = "index.html";
}

/* ---------- LOGIN ---------- */
function login() {
    let username = document.getElementById("li_user").value;
    let password = document.getElementById("li_pass").value;

    let userData = localStorage.getItem(username);

    if (!userData) {
        alert("User not found. Please signup.");
        return;
    }

    let user = JSON.parse(userData);

    if (user.password === password) {
        localStorage.setItem("loggedUser", username);
        localStorage.setItem("role", user.role);
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

/* ---------- LOGOUT ---------- */
function logout() {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("role");
    window.location.href = "login.html";
}
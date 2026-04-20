const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { username: "user", password: "user", role: "USER" },
  { username: "admin", password: "admin", role: "ADMIN" }
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const found = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!found) return res.status(401).json({ message: "Invalid credentials" });

  res.json({ role: found.role, username: found.username });
});

app.get("/api/user/profile", (req, res) => {
  res.json({ message: "User profile data" });
});

app.get("/api/admin/dashboard", (req, res) => {
  const role = req.headers.role;

  if (role !== "ADMIN") {
    return res.status(403).json({ message: "Access Denied" });
  }

  res.json({ message: "Admin dashboard data" });
});

app.listen(8080, () => console.log("RBAC Server running on port 8080"));
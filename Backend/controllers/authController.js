import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const register = async (req, res) => {
  console.log("=====================================");
  console.log("🔥 REGISTER ENDPOINT HIT");
  console.log("Body:", req.body);

  try {
    const { name, email, password } = req.body;

    // 1. Test DB connection
    try {
      const test = await db.query("SELECT NOW()");
      console.log("📌 DB Connected:", test.rows[0]);
    } catch (dbErr) {
      console.error("❌ DB Connection Failed:", dbErr);
      return res.status(500).json({ message: "DB connection error", error: dbErr });
    }

    // 2. Check if email exists
    console.log("🔍 Checking if user exists:", email);
    const userExist = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    console.log("UserExist Query Result:", userExist.rows);

    if (userExist.rows.length > 0) {
      console.warn("⚠️ Email already in use:", email);
      return res.status(400).json({ message: "Email already exists" });
    }

    // 3. Hash password
    console.log("🔐 Hashing password...");
    const hashed = await bcrypt.hash(password, 10);
    console.log("Password hashed:", hashed.substring(0, 10) + "...");

    // 4. Insert new user
    console.log("📝 Inserting user into DB...");
    const result = await db.query(
      "INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id, name, email",
      [name, email, hashed]
    );
    console.log("Insert Result:", result.rows);

    const user = result.rows[0];

    // 5. Create JWT
    console.log("🎫 Creating JWT...");
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("JWT Created:", token.substring(0, 10) + "...");

    // 6. Send cookie
    console.log("🍪 Setting token cookie...");
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    // 7. Success response
    console.log("✅ Registration Success:", user);
    res.json({ user });

  } catch (err) {
    console.error("❌ REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }

  console.log("=====================================");
};



// ==============================
// LOGIN WITH DEBUG LOGS
// ==============================
export const login = async (req, res) => {
  console.log("=====================================");
  console.log("🔥 LOGIN ENDPOINT HIT");
  console.log("Body:", req.body);

  try {
    const { email, password } = req.body;

    // Check if user exists
    console.log("🔍 Checking user:", email);
    const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    console.log("User Query Result:", result.rows);

    const user = result.rows[0];
    if (!user) {
      console.warn("⚠️ No user found:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare passwords
    console.log("🔐 Comparing passwords...");
    const match = await bcrypt.compare(password, user.password);
    console.log("Password Match:", match);

    if (!match) {
      console.warn("⚠️ Wrong password for:", email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT
    console.log("🎫 Creating JWT...");
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("JWT Created:", token.substring(0, 10) + "...");

    // Set cookie
    console.log("🍪 Setting token cookie...");
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    // Success
    console.log("✅ Login Success:", email);
    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("❌ LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }

  console.log("=====================================");
};



// ==============================
// LOGOUT
// ==============================
export const logout = (req, res) => {
  console.log("🚪 Logout hit");
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

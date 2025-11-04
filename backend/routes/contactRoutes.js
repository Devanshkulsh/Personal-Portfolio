const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");

const router = express.Router();

// POST /api/contact
router.post(
  "/",
  [
    body("user_name").trim().isLength({ min: 2 }).withMessage("Name too short"),
    body("user_email").isEmail().withMessage("Invalid email"),
    body("message").isLength({ min: 5 }).withMessage("Message too short"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { user_name, user_email, message } = req.body;
      const doc = new Contact({ name: user_name, email: user_email, message });
      await doc.save();

      //  Optional: send admin notification email here (e.g., using SendGrid)

      return res.status(201).json({ success: true, id: doc._id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;

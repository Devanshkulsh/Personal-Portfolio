const express = require("express");
const basicAuth = require("basic-auth");
const Contact = require("../models/Contact");

const router = express.Router();

const auth = (req, res, next) => {
  const user = basicAuth(req);
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  if (!user || user.name !== adminUser || user.pass !== adminPass) {
    res.set("WWW-Authenticate", 'Basic realm="Admin Area"');
    return res.status(401).send("Authentication required.");
  }
  next();
};

//  GET /api/admin/contacts
router.get("/contacts", auth, async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 }).limit(500);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
    
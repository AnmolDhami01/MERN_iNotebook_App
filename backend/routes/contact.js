const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(422).json({ error: "Please Fill the Fields Correctly" });
  }

  try {
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    const savingContact = await contact.save();

    console.log(savingContact);

    if (savingContact) {
      res.status(201).json({ message: "Message Sent" });
    } else {
      res.status(422).json({ error: "Message Not Sent" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/create', async (req, res) => {
  const { clerkId, email, role } = req.body;
  try {
    const user = new User({ clerkId, email, role });
    await user.save();
    res.status(201).json({ message: 'User saved' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving user' });
  }
});

router.get('/:clerkId', async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error finding user' });
  }
});

module.exports = router;

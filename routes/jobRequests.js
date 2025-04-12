const express = require('express');
const router = express.Router();
const JobRequest = require('../models/JobRequest');

router.post('/create', async (req, res) => {
  const data = req.body;
  try {
    const job = new JobRequest(data);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: 'Error creating job request' });
  }
});

router.get('/byUser/:userId', async (req, res) => {
  try {
    const jobs = await JobRequest.find({ userId: req.params.userId });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error getting jobs' });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const jobRequestSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: String,
  mediaUrl: String,
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  location: String,
  category: String,
  assignedTechId: String,
  price: Number,
}, { timestamps: true });

module.exports = mongoose.model('JobRequest', jobRequestSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a Employee
const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the `updatedAt` field before saving
employeeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  ip: { type: String, required: true },
  title: { type: String, required: true ,minlength:1},
  description: { type: String, required: true },
  active: { type: Boolean, required: true ,default: true},
}, {
  timestamps: true,
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
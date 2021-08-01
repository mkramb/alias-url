import mongoose from 'mongoose';

export const AliasTableSchema = new mongoose.Schema({
  alias: {
    type: 'string',
    unique: true,
  },
  original_url: {
    type: 'string',
    unique: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

export const AliasTable = mongoose.model('Alias', AliasTableSchema);

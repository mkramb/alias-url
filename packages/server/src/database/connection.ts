import mongoose from 'mongoose';

export const createConnection = async () => {
  const connectionUri = process.env.DB_URI ?? 'mongodb://localhost:27017/alias';

  await mongoose.connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
  });

  return mongoose.connections[0];
};

export const getConnection = () => {
  return mongoose.connections[0];
};

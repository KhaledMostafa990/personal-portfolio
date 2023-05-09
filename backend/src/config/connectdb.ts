import mongoose from 'mongoose';

export async function connectDB(uri: string) {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(uri)
    .then((_) => console.log('MongoDB Connected\n'))
    .catch((err) => console.log(err));
}

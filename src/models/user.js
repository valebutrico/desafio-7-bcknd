import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: 'user' },
  githubId: { type: String }  
});

userSchema.pre('save', function (next) {
  if (!this.password && !this.githubId) {
    next(new Error('Path `password` is required.'));
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);

export default User;

import { Model, Schema, model} from 'mongoose';
import { IUser } from './users.interface';

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: {type: String, required: true}
  },
  {timestamps: true} //created at, updated at
  );

export const User = model<IUser, UserModel>('User', userSchema);
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    email: string;
    username: string;
    password: string;
}

const userSchema: Schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IUser>('User', userSchema);

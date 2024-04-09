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
            validate: {
                validator: (v: string) => {
                    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return re.test(v);
                },
                message: (props: { value: string }) => `"${props.value}" is not a valid email`,
            },
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: (v: string) => {
                    const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
                    return re.test(v);
                },
                message: () => 'Password must have at least 6 characters, 1 uppercase letter and 1 number',
            },
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model<IUser>('User', userSchema);

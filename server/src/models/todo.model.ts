import { Document, Schema, model } from 'mongoose';

interface ITodo extends Document {
    title: string;
    description: string;
    status: boolean;
}

const todoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
        deadline: {
            type: Date,
            required: false,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default model<ITodo>('Todo', todoSchema);

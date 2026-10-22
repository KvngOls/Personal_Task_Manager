// task.ts -- WHAT A TASK LOOKS LIKE IN THE DATABASE

import { model, Schema } from "mongoose";

// Flow:
// 1. Describe tbe task's shape with a Typescript interface
// 2. Describe the same shape with a Mongoose schema
// 3. Creat the model - the object we use to create/find/update/delete tasks

// Step 1: the typescript shape of a task
export interface ITask {
  title: string;
  description: string;
  tag: string;
}

export const TASK_TAGS = ["Urgent", "Important"];

// Step 2: the database structure and rules for a task
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot be longer than 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    tag: {
      type: String,
      required: [true, "Tag is required"],
      enum: { values: TASK_TAGS, message: "Tag must be urgent or important" },
    },
  },
  { timestamps: true }, // Automatically adds createdAt and updatedAt
);

// Step 3: the model. "Task" becomes the "tasks" collection in MongoDB
const Task = model<ITask>("Task", taskSchema);

export default Task;

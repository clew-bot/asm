import mongoose from "mongoose";
const PollModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // poll: {
    //     type: Object,
    //     required: true,
    // },
    options: [
      {
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
        votes: {
          type: Number,
          default: 0,
        },
      },
    ],
    votes: {
      type: Array,
      default: [],
      ref: "User",
    },
    votedBy: {
      type: Array,
      default: [],
      ref: "User",
    },
  },
  { timestamps: true }
);

const PollModel = mongoose.model("PollModel", PollModelSchema);
export default PollModel;

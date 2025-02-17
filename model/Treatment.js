import mongoose from "mongoose";

const TreatmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        pictureUrl: {
            type: String,
            required: true
        },
        barberIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
        }]
    },
    { timestamps: true }
);

export default mongoose.model.Treatment || mongoose.model("Treatment", TreatmentSchema);
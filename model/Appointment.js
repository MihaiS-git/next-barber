import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        barberIds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        treatmentIds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Treatment",
            required: true
        },
        startDateTime: {
            type: Date,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        approvalStatus: {
            type: String,
            enum: ['PENDING', 'REJECTED', 'APPROVED'],
            default: 'PENDING'
        }
    },
    {timestamps: true}
);

export default mongoose.model.Appointment || mongoose.model("Appointment", AppointmentSchema);
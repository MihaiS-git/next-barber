import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        role: {
            type: String,
            enum: ['CUSTOMER', 'BARBER', 'ADMIN'],
            default: 'CUSTOMER'
        },
        dob: {
            type: Date,
            required: true
        },
        pictureUrl: {
            type: String,
            default: '/users/bs_user.png'
        },
        treatmentIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Treatment",
            required: false
        }],
        appointmentIds: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: false
        }],
        notAvailable: [{
            start: Date,
            end: Date
        }],
        resetToken: {
            type: String,
            required: false
        },
        resetTokenExpiration: {
            type: Number,
            required: false
        }
    },
    {timestamps: true}
);

export default mongoose.model.User || mongoose.model("User", UserSchema);
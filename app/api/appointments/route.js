import { connectToDatabase } from "@/lib/mongodb";
import Appointment from "@/model/Appointment";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const appointments = await Appointment.find({});
        if (!appointments) {
            return NextResponse.json({error: 'No appointments found.'}, {status: 404});
        }
        return NextResponse.json(appointments, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch appointments.'}, {status: 500});
    }
}


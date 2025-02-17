import { connectToDatabase } from "@/lib/mongodb";
import Treatment from "@/model/Treatment";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDatabase();
        const treatments = await Treatment.find();
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch treatments.'}, {status: 500});
    }
}
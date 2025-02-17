import { connectToDatabase } from "@/lib/mongodb";
import User from "@/model/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        await connectToDatabase();
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({ error: "Email already in use." }, { status: 400 });
        }
        const newUser = await User.create({ email, password });
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error: "Failed to register new user." }, { status: 500 });
    }
}

export async function getUserByEmail(email) {
    await connectToDatabase();
    return User.findOne({ email });
}

export async function getUserById(id) {
    await connectToDatabase();
    return User.findById(id);
}

export async function GET(req) {
    try {
        const { searchParams } = req.nextUrl;
        const email = searchParams.get('email');
        const userId = searchParams.get('userId');

        let user;

        if (email) {
            user = await getUserByEmail(email);
        } else if (userId) {
            user = await getUserById(userId);
        } else {
            return NextResponse.json({ error: 'No email or user ID specified.' }, { status: 400 });
        }

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: 'Failed to fetch user.' }, { status: 500 });
    }
}

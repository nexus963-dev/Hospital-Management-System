import { NextResponse } from "next/server";
import connectDB from "@/src/db/connectDB";
import User from "@/src/models/user";

// Handle POST requests
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { uhid, name, contact, gender, dateOfBirth, bloodGroup } = body;

    if (!uhid) {
      return NextResponse.json({ error: "UHID is required" }, { status: 400 });
    }

    const age = calculateAge(dateOfBirth);

    const user = await User.findOneAndUpdate(
      { uhid },
      { name, contact, gender, dateOfBirth, bloodGroup, age },
      { new: true, runValidators: true }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User details updated", user }, { status: 200 });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function calculateAge(dob) {
  if (!dob) return "";
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

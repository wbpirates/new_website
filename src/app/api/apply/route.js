import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ApplyModel from "@/models/apply";

export async function POST(req) {
  const body = await req.json();
  const { name, fatherName, email, age, phone, courses } = body;
  console.log(req.body);

  if (!name || !email || !age || !phone || !courses) {
    return NextResponse.json(
      { message: "Please fill all the fields" },
      { status: 400 }
    );
  }
  try {
    await dbConnect();

    const document = new ApplyModel({
      name,
      fatherName,
      email,
      age,
      phone,
      courses,
    });

    await document.save();

    return NextResponse.json(
      { message: "Applied successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}

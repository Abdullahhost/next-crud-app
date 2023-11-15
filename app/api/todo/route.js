
import { connectDB } from "@/libs/mongodb"
import Todo from "@/models/todo"
import { NextResponse } from "next/server";


export const POST = async (req) => {
    
    const { title, description }  = await req.json();
    
    await connectDB();
    await Todo.create({title, description});
    return NextResponse.json({message: "Todo are Created! :)"}, {status: 201 });
}


export const GET = async (req) => {

    await connectDB();
    const data = await Todo.find();
    return NextResponse.json( {data} , {status: 200 });
}

export const DELETE = async ( req ) => {

    const id = req.nextUrl.searchParams.get("id");
    await connectDB();

    await Todo.findByIdAndDelete(id);

   return NextResponse.json({ message:  "Todo Deleted successfully!"} , {status: 200})
}
import { connectDB } from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";


export const PUT =  async ( req, {params} ) => {
    const { id } = params

    const { newTitle: title, newDescription: description } = await req.json();

    await connectDB();

    await Todo.findByIdAndUpdate(id, {title, description});

    return NextResponse.json({message: "Todo is updated!"} , {status: 200})

}

export const GET = async ( req, {params} ) => {
    const { id } = params;
    
    await connectDB();

    const singleTodo = await Todo.findOne({ _id : id })

    return NextResponse.json({ singleTodo }, {status: 200})
} 
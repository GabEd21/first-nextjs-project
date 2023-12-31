


import posts from "@/utils/posts";
import { PrismaClient } from "@prisma/client";

export async function GET(request){
    const prisma = new PrismaClient()
    const data = await prisma.post.findMany()

    return new Response(JSON.stringify(data))
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    return new Response(
        JSON.stringify(
            {message: "Post succesfully added"}
        )
    )
}


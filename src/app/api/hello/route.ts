import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    console.log('Olá 5 Periodo')
    return NextResponse.json({message: 'Hello World'})
}
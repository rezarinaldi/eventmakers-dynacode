import { NextResponse } from "next/server";
import * as jose from "jose"
import { cookies } from "next/headers"; 


export async function middleware(request) {
    const token = cookies().get("token")?.value

    const secretKey = process.env.SECRET_KEY;

    const secret = new TextEncoder().encode(secretKey);

    // const cookie = request.cookies.get("token")?.value
    // console.log(cookie);
    
if (!token) {
    return NextResponse.redirect(new URL("/", request.url))
}

// token valid atau tidak
// verifikasi dengan token dan secretkey

 try {
    await jose.jwtVerify(token, secret);
    return NextResponse.next();
 } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url))
 }

}

export const config = {
    matcher: ["/dashboard"]
}
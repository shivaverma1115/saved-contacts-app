import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // If user is on home page → redirect to /contacts
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/contacts", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"]
};
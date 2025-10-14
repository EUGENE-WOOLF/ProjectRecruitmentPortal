import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basic middleware that currently lets requests pass through.
// Extend this to add redirects / auth checks per-role as needed.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Only run middleware for application routes (exclude Next internals & assets)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

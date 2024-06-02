import { auth } from "./auth"
import { NextResponse } from "next/server";

export default auth;


export function middleware(request) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
    ],
  }
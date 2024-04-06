import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isJwt = request.cookies.get('token') === undefined;
  const isTodoPath = request.nextUrl.pathname.startsWith('/todo');

  if(isTodoPath && isJwt) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!isTodoPath && !isJwt) {
    return NextResponse.redirect(new URL('/todo', request.url))
  }

  return NextResponse.next()
}
// See "Matching Paths" below to learn m3ore
export const config = {
  matcher: ['/', '/todo'],
}
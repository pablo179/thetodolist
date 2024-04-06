import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest, res: NextResponse) {
  const isJwt = req.cookies.get('token') === undefined;
  const isTodoPath = req.nextUrl.pathname.startsWith('/todo');

  if(isTodoPath && isJwt) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!isTodoPath && !isJwt) {
    return NextResponse.redirect(new URL('/todo', req.url))
  }

  return NextResponse.next()
}
// See "Matching Paths" below to learn m3ore
export const config = {
  matcher: ['/', '/todo'],
}